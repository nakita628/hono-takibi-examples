import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAgeusdInfoKey() {
  return ['ageusd', '/ageusd/info'] as const
}

export function useGetAgeusdInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ageusd.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgeusdInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ageusd.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ageusd.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgeusdInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ageusd.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgeusdInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ageusd.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ageusd.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCancelbabelBoxIdKey(
  args: InferRequestType<(typeof client.cancelbabel)[':boxId']['$get']>,
) {
  return ['cancelbabel', '/cancelbabel/:boxId', args] as const
}

export function useGetCancelbabelBoxId<TError = unknown>(
  args: InferRequestType<(typeof client.cancelbabel)[':boxId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cancelbabel)[':boxId']['$get']>>>
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
        ? getGetCancelbabelBoxIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cancelbabel)[':boxId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cancelbabel[':boxId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCancelbabelBoxId<TError = unknown>(
  args: InferRequestType<(typeof client.cancelbabel)[':boxId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cancelbabel)[':boxId']['$get']>>>
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
        ? getGetCancelbabelBoxIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cancelbabel)[':boxId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cancelbabel[':boxId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCreatebabelAddressKey(
  args: InferRequestType<(typeof client.createbabel)[':address']['$get']>,
) {
  return ['createbabel', '/createbabel/:address', args] as const
}

export function useGetCreatebabelAddress<TError = unknown>(
  args: InferRequestType<(typeof client.createbabel)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.createbabel)[':address']['$get']>>>
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
        ? getGetCreatebabelAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.createbabel)[':address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createbabel[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCreatebabelAddress<TError = unknown>(
  args: InferRequestType<(typeof client.createbabel)[':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.createbabel)[':address']['$get']>>>
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
        ? getGetCreatebabelAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.createbabel)[':address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.createbabel[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMosaikBabelfeeIndexKey() {
  return ['mosaik', '/mosaik/babelfee/'] as const
}

export function useGetMosaikBabelfeeIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMosaikBabelfeeIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mosaik.babelfee.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMosaikBabelfeeIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMosaikBabelfeeIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mosaik.babelfee.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMosaikBabelfeeNewofferKey() {
  return ['mosaik', '/mosaik/babelfee/newoffer'] as const
}

export function useGetMosaikBabelfeeNewoffer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMosaikBabelfeeNewofferKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mosaik.babelfee.newoffer.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMosaikBabelfeeNewoffer<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMosaikBabelfeeNewofferKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mosaik.babelfee.newoffer.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMosaikBabelfeeNewofferDoitKey() {
  return ['mosaik', '/mosaik/babelfee/newoffer/doit', 'POST'] as const
}

export function usePostMosaikBabelfeeNewofferDoit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.babelfee.newoffer.doit.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.mosaik.babelfee.newoffer.doit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMosaikBabelfeeNewofferDoitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.mosaik.babelfee.newoffer.doit.$post> },
      ) => parseResponse(client.mosaik.babelfee.newoffer.doit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMosaikBabelfeeNewofferNewInputKey() {
  return ['mosaik', '/mosaik/babelfee/newoffer/new-input', 'POST'] as const
}

export function usePostMosaikBabelfeeNewofferNewInput<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mosaik.babelfee.newoffer)['new-input']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mosaik.babelfee.newoffer)['new-input']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMosaikBabelfeeNewofferNewInputKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mosaik.babelfee.newoffer)['new-input']['$post']>
        },
      ) => parseResponse(client.mosaik.babelfee.newoffer['new-input'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMosaikBabelfeeNotificationcheckKey() {
  return ['mosaik', '/mosaik/babelfee/notificationcheck'] as const
}

export function useGetMosaikBabelfeeNotificationcheck<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mosaik.babelfee.notificationcheck.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMosaikBabelfeeNotificationcheckKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mosaik.babelfee.notificationcheck.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mosaik.babelfee.notificationcheck.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMosaikBabelfeeNotificationcheck<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.mosaik.babelfee.notificationcheck.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMosaikBabelfeeNotificationcheckKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mosaik.babelfee.notificationcheck.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mosaik.babelfee.notificationcheck.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMosaikBoxconsolidationIndexKey() {
  return ['mosaik', '/mosaik/boxconsolidation/'] as const
}

export function useGetMosaikBoxconsolidationIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.boxconsolidation.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMosaikBoxconsolidationIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mosaik.boxconsolidation.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mosaik.boxconsolidation.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMosaikBoxconsolidationIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.boxconsolidation.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMosaikBoxconsolidationIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.mosaik.boxconsolidation.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mosaik.boxconsolidation.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMosaikBoxconsolidationConsolidateP2pkaddressKey(
  args: InferRequestType<
    (typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']
  >,
) {
  return ['mosaik', '/mosaik/boxconsolidation/consolidate/:p2pkaddress', args] as const
}

export function useGetMosaikBoxconsolidationConsolidateP2pkaddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMosaikBoxconsolidationConsolidateP2pkaddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mosaik.boxconsolidation.consolidate[':p2pkaddress'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMosaikBoxconsolidationConsolidateP2pkaddress<TError = unknown>(
  args: InferRequestType<
    (typeof client.mosaik.boxconsolidation.consolidate)[':p2pkaddress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMosaikBoxconsolidationConsolidateP2pkaddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mosaik.boxconsolidation.consolidate[':p2pkaddress'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMosaikTokenburnKey() {
  return ['mosaik', '/mosaik/tokenburn'] as const
}

export function useGetMosaikTokenburn<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMosaikTokenburnKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mosaik.tokenburn.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMosaikTokenburn<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMosaikTokenburnKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mosaik.tokenburn.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMosaikTokenburnGetUuidKey(
  args: InferRequestType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>,
) {
  return ['mosaik', '/mosaik/tokenburn/get/:uuid', args] as const
}

export function useGetMosaikTokenburnGetUuid<TError = unknown>(
  args: InferRequestType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>>
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
        ? getGetMosaikTokenburnGetUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mosaik.tokenburn.get[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMosaikTokenburnGetUuid<TError = unknown>(
  args: InferRequestType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>>
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
        ? getGetMosaikTokenburnGetUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mosaik.tokenburn.get)[':uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mosaik.tokenburn.get[':uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMosaikTokenburnPrepareKey() {
  return ['mosaik', '/mosaik/tokenburn/prepare', 'POST'] as const
}

export function usePostMosaikTokenburnPrepare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.mosaik.tokenburn.prepare.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.mosaik.tokenburn.prepare.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMosaikTokenburnPrepareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.mosaik.tokenburn.prepare.$post> },
      ) => parseResponse(client.mosaik.tokenburn.prepare.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentAddrequestKey() {
  return ['payment', '/payment/addrequest', 'POST'] as const
}

export function usePostPaymentAddrequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment.addrequest.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment.addrequest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentAddrequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payment.addrequest.$post> }) =>
        parseResponse(client.payment.addrequest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentStateRequestIdKey(
  args: InferRequestType<(typeof client.payment.state)[':requestId']['$get']>,
) {
  return ['payment', '/payment/state/:requestId', args] as const
}

export function useGetPaymentStateRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.payment.state)[':requestId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment.state)[':requestId']['$get']>>
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
        ? getGetPaymentStateRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment.state)[':requestId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment.state[':requestId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentStateRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.payment.state)[':requestId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment.state)[':requestId']['$get']>>
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
        ? getGetPaymentStateRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment.state)[':requestId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment.state[':requestId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPeersListKey(args: InferRequestType<typeof client.peers.list.$get>) {
  return ['peers', '/peers/list', args] as const
}

export function useGetPeersList<TError = unknown>(
  args: InferRequestType<typeof client.peers.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPeersListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.peers.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPeersList<TError = unknown>(
  args: InferRequestType<typeof client.peers.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPeersListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.peers.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.peers.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSigrsvExchangeIndexKey(
  args: InferRequestType<typeof client.sigrsv.exchange.index.$get>,
) {
  return ['sigrsv', '/sigrsv/exchange/', args] as const
}

export function useGetSigrsvExchangeIndex<TError = unknown>(
  args: InferRequestType<typeof client.sigrsv.exchange.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.exchange.index.$get>>>
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
        ? getGetSigrsvExchangeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.exchange.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sigrsv.exchange.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigrsvExchangeIndex<TError = unknown>(
  args: InferRequestType<typeof client.sigrsv.exchange.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.exchange.index.$get>>>
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
        ? getGetSigrsvExchangeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.exchange.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sigrsv.exchange.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSigrsvExchangeAmountInfoKey(
  args: InferRequestType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>,
) {
  return ['sigrsv', '/sigrsv/exchange/:amount/info', args] as const
}

export function useGetSigrsvExchangeAmountInfo<TError = unknown>(
  args: InferRequestType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>>
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
        ? getGetSigrsvExchangeAmountInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sigrsv.exchange[':amount'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigrsvExchangeAmountInfo<TError = unknown>(
  args: InferRequestType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>>
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
        ? getGetSigrsvExchangeAmountInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sigrsv.exchange)[':amount']['info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sigrsv.exchange[':amount'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSigrsvPriceKey() {
  return ['sigrsv', '/sigrsv/price'] as const
}

export function useGetSigrsvPrice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.price.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSigrsvPriceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.price.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sigrsv.price.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigrsvPrice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.price.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSigrsvPriceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigrsv.price.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sigrsv.price.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSigusdExchangeIndexKey(
  args: InferRequestType<typeof client.sigusd.exchange.index.$get>,
) {
  return ['sigusd', '/sigusd/exchange/', args] as const
}

export function useGetSigusdExchangeIndex<TError = unknown>(
  args: InferRequestType<typeof client.sigusd.exchange.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.exchange.index.$get>>>
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
        ? getGetSigusdExchangeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.exchange.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sigusd.exchange.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigusdExchangeIndex<TError = unknown>(
  args: InferRequestType<typeof client.sigusd.exchange.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.exchange.index.$get>>>
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
        ? getGetSigusdExchangeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.exchange.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sigusd.exchange.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSigusdExchangeAmountInfoKey(
  args: InferRequestType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>,
) {
  return ['sigusd', '/sigusd/exchange/:amount/info', args] as const
}

export function useGetSigusdExchangeAmountInfo<TError = unknown>(
  args: InferRequestType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>>
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
        ? getGetSigusdExchangeAmountInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sigusd.exchange[':amount'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigusdExchangeAmountInfo<TError = unknown>(
  args: InferRequestType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>>
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
        ? getGetSigusdExchangeAmountInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sigusd.exchange)[':amount']['info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sigusd.exchange[':amount'].info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSigusdPriceKey() {
  return ['sigusd', '/sigusd/price'] as const
}

export function useGetSigusdPrice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.price.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSigusdPriceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.price.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sigusd.price.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigusdPrice<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.price.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSigusdPriceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sigusd.price.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sigusd.price.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTokensCheckTokenIdTokenNameKey(
  args: InferRequestType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>,
) {
  return ['tokens', '/tokens/check/:tokenId/:tokenName', args] as const
}

export function useGetTokensCheckTokenIdTokenName<TError = unknown>(
  args: InferRequestType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>>
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
        ? getGetTokensCheckTokenIdTokenNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tokens.check[':tokenId'][':tokenName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensCheckTokenIdTokenName<TError = unknown>(
  args: InferRequestType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>>
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
        ? getGetTokensCheckTokenIdTokenNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens.check)[':tokenId'][':tokenName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tokens.check[':tokenId'][':tokenName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTokensListBlockedKey() {
  return ['tokens', '/tokens/listBlocked'] as const
}

export function useGetTokensListBlocked<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listBlocked.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTokensListBlockedKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listBlocked.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens.listBlocked.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensListBlocked<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listBlocked.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTokensListBlockedKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listBlocked.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens.listBlocked.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTokensListGenuineKey() {
  return ['tokens', '/tokens/listGenuine'] as const
}

export function useGetTokensListGenuine<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listGenuine.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTokensListGenuineKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listGenuine.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens.listGenuine.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensListGenuine<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listGenuine.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTokensListGenuineKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.listGenuine.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens.listGenuine.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTokensPricesAllKey() {
  return ['tokens', '/tokens/prices/all'] as const
}

export function useGetTokensPricesAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.prices.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTokensPricesAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.prices.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens.prices.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensPricesAll<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.prices.all.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTokensPricesAllKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.prices.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens.prices.all.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTokensPricesTokenIdKey(
  args: InferRequestType<(typeof client.tokens.prices)[':tokenId']['$get']>,
) {
  return ['tokens', '/tokens/prices/:tokenId', args] as const
}

export function useGetTokensPricesTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.tokens.prices)[':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens.prices)[':tokenId']['$get']>>
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
        ? getGetTokensPricesTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens.prices)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens.prices[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensPricesTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.tokens.prices)[':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens.prices)[':tokenId']['$get']>>
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
        ? getGetTokensPricesTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens.prices)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens.prices[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
