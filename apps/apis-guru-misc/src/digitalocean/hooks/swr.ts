import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV21ClicksKey(args: InferRequestType<(typeof client.v2)['1-clicks']['$get']>) {
  return ['v2', '/v2/1-clicks', args] as const
}

export function useGetV21Clicks<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['1-clicks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['1-clicks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV21ClicksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['1-clicks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['1-clicks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV21Clicks<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['1-clicks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['1-clicks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV21ClicksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['1-clicks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['1-clicks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV21ClicksKubernetesKey() {
  return ['v2', '/v2/1-clicks/kubernetes', 'POST'] as const
}

export function usePostV21ClicksKubernetes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV21ClicksKubernetesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['1-clicks']['kubernetes']['$post']> },
      ) => parseResponse(client.v2['1-clicks'].kubernetes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AccountKey() {
  return ['v2', '/v2/account'] as const
}

export function useGetV2Account<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Account<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AccountKeysKey(args: InferRequestType<typeof client.v2.account.keys.$get>) {
  return ['v2', '/v2/account/keys', args] as const
}

export function useGetV2AccountKeys<TError = unknown>(
  args: InferRequestType<typeof client.v2.account.keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AccountKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.account.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AccountKeys<TError = unknown>(
  args: InferRequestType<typeof client.v2.account.keys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AccountKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.account.keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AccountKeysKey() {
  return ['v2', '/v2/account/keys', 'POST'] as const
}

export function usePostV2AccountKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.account.keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AccountKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.account.keys.$post> }) =>
        parseResponse(client.v2.account.keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AccountKeysSshKeyIdentifierKey(
  args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>,
) {
  return ['v2', '/v2/account/keys/:ssh_key_identifier', args] as const
}

export function useGetV2AccountKeysSshKeyIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>>
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
        ? getGetV2AccountKeysSshKeyIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.account.keys[':ssh_key_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AccountKeysSshKeyIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>>
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
        ? getGetV2AccountKeysSshKeyIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.account.keys[':ssh_key_identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2AccountKeysSshKeyIdentifierKey() {
  return ['v2', '/v2/account/keys/:ssh_key_identifier', 'PUT'] as const
}

export function usePutV2AccountKeysSshKeyIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2AccountKeysSshKeyIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>
        },
      ) => parseResponse(client.v2.account.keys[':ssh_key_identifier'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2AccountKeysSshKeyIdentifierKey() {
  return ['v2', '/v2/account/keys/:ssh_key_identifier', 'DELETE'] as const
}

export function useDeleteV2AccountKeysSshKeyIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2AccountKeysSshKeyIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>
        },
      ) => parseResponse(client.v2.account.keys[':ssh_key_identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ActionsKey(args: InferRequestType<typeof client.v2.actions.$get>) {
  return ['v2', '/v2/actions', args] as const
}

export function useGetV2Actions<TError = unknown>(
  args: InferRequestType<typeof client.v2.actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ActionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Actions<TError = unknown>(
  args: InferRequestType<typeof client.v2.actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ActionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ActionsActionIdKey(
  args: InferRequestType<(typeof client.v2.actions)[':action_id']['$get']>,
) {
  return ['v2', '/v2/actions/:action_id', args] as const
}

export function useGetV2ActionsActionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actions)[':action_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actions)[':action_id']['$get']>>
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
        ? getGetV2ActionsActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actions)[':action_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actions[':action_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ActionsActionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.actions)[':action_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actions)[':action_id']['$get']>>
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
        ? getGetV2ActionsActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.actions)[':action_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.actions[':action_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AppsKey(args: InferRequestType<typeof client.v2.apps.$get>) {
  return ['v2', '/v2/apps', args] as const
}

export function useGetV2Apps<TError = unknown>(
  args: InferRequestType<typeof client.v2.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Apps<TError = unknown>(
  args: InferRequestType<typeof client.v2.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV2AppsKey() {
  return ['v2', '/v2/apps', 'POST'] as const
}

export function usePostV2Apps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.apps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.apps.$post> }) =>
        parseResponse(client.v2.apps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2AppsMetricsBandwidthDailyKey() {
  return ['v2', '/v2/apps/metrics/bandwidth_daily', 'POST'] as const
}

export function usePostV2AppsMetricsBandwidthDaily<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.apps.metrics.bandwidth_daily.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.apps.metrics.bandwidth_daily.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AppsMetricsBandwidthDailyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.apps.metrics.bandwidth_daily.$post> },
      ) => parseResponse(client.v2.apps.metrics.bandwidth_daily.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2AppsProposeKey() {
  return ['v2', '/v2/apps/propose', 'POST'] as const
}

export function usePostV2AppsPropose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.propose.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.apps.propose.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AppsProposeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.apps.propose.$post> }) =>
        parseResponse(client.v2.apps.propose.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AppsRegionsKey() {
  return ['v2', '/v2/apps/regions'] as const
}

export function useGetV2AppsRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.regions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AppsRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.regions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AppsRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AppsTiersKey() {
  return ['v2', '/v2/apps/tiers'] as const
}

export function useGetV2AppsTiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AppsTiersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps.tiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsTiers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AppsTiersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps.tiers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AppsTiersInstanceSizesKey() {
  return ['v2', '/v2/apps/tiers/instance_sizes'] as const
}

export function useGetV2AppsTiersInstanceSizes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.instance_sizes.$get>>>
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
        ? getGetV2AppsTiersInstanceSizesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.instance_sizes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps.tiers.instance_sizes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsTiersInstanceSizes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.instance_sizes.$get>>>
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
        ? getGetV2AppsTiersInstanceSizesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.instance_sizes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps.tiers.instance_sizes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AppsTiersInstanceSizesSlugKey(
  args: InferRequestType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>,
) {
  return ['v2', '/v2/apps/tiers/instance_sizes/:slug', args] as const
}

export function useGetV2AppsTiersInstanceSizesSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>>
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
        ? getGetV2AppsTiersInstanceSizesSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.apps.tiers.instance_sizes[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsTiersInstanceSizesSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>>
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
        ? getGetV2AppsTiersInstanceSizesSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.apps.tiers.instance_sizes[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AppsTiersSlugKey(
  args: InferRequestType<(typeof client.v2.apps.tiers)[':slug']['$get']>,
) {
  return ['v2', '/v2/apps/tiers/:slug', args] as const
}

export function useGetV2AppsTiersSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps.tiers)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps.tiers)[':slug']['$get']>>>
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
        ? getGetV2AppsTiersSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps.tiers)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps.tiers[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsTiersSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps.tiers)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps.tiers)[':slug']['$get']>>>
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
        ? getGetV2AppsTiersSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps.tiers)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps.tiers[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AppsAppIdAlertsKey(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>,
) {
  return ['v2', '/v2/apps/:app_id/alerts', args] as const
}

export function useGetV2AppsAppIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>
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
        ? getGetV2AppsAppIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps[':app_id'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsAppIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>
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
        ? getGetV2AppsAppIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps[':app_id'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AppsAppIdAlertsAlertIdDestinationsKey() {
  return ['v2', '/v2/apps/:app_id/alerts/:alert_id/destinations', 'POST'] as const
}

export function usePostV2AppsAppIdAlertsAlertIdDestinations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AppsAppIdAlertsAlertIdDestinationsKey()
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
            (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.apps[':app_id'].alerts[':alert_id'].destinations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AppsAppIdComponentsComponentNameLogsKey(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
  >,
) {
  return ['v2', '/v2/apps/:app_id/components/:component_name/logs', args] as const
}

export function useGetV2AppsAppIdComponentsComponentNameLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
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
        ? getGetV2AppsAppIdComponentsComponentNameLogsKey(args)
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
                (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
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
          client.v2.apps[':app_id'].components[':component_name'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsAppIdComponentsComponentNameLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
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
        ? getGetV2AppsAppIdComponentsComponentNameLogsKey(args)
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
                (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
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
          client.v2.apps[':app_id'].components[':component_name'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AppsAppIdDeploymentsKey(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>,
) {
  return ['v2', '/v2/apps/:app_id/deployments', args] as const
}

export function useGetV2AppsAppIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>>
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
        ? getGetV2AppsAppIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps[':app_id'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsAppIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>>
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
        ? getGetV2AppsAppIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps[':app_id'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AppsAppIdDeploymentsKey() {
  return ['v2', '/v2/apps/:app_id/deployments', 'POST'] as const
}

export function usePostV2AppsAppIdDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AppsAppIdDeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$post']> },
      ) => parseResponse(client.v2.apps[':app_id'].deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AppsAppIdDeploymentsDeploymentIdKey(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
  >,
) {
  return ['v2', '/v2/apps/:app_id/deployments/:deployment_id', args] as const
}

export function useGetV2AppsAppIdDeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
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
        ? getGetV2AppsAppIdDeploymentsDeploymentIdKey(args)
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
                (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
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
          client.v2.apps[':app_id'].deployments[':deployment_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsAppIdDeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
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
        ? getGetV2AppsAppIdDeploymentsDeploymentIdKey(args)
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
                (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
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
          client.v2.apps[':app_id'].deployments[':deployment_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2AppsAppIdDeploymentsDeploymentIdCancelKey() {
  return ['v2', '/v2/apps/:app_id/deployments/:deployment_id/cancel', 'POST'] as const
}

export function usePostV2AppsAppIdDeploymentsDeploymentIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AppsAppIdDeploymentsDeploymentIdCancelKey()
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
            (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.apps[':app_id'].deployments[':deployment_id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsKey(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
  >,
) {
  return [
    'v2',
    '/v2/apps/:app_id/deployments/:deployment_id/components/:component_name/logs',
    args,
  ] as const
}

export function useGetV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
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
        ? getGetV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsKey(args)
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
                (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
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
          client.v2.apps[':app_id'].deployments[':deployment_id'].components[
            ':component_name'
          ].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
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
        ? getGetV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsKey(args)
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
                (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
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
          client.v2.apps[':app_id'].deployments[':deployment_id'].components[
            ':component_name'
          ].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AppsAppIdDeploymentsDeploymentIdLogsKey(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
  >,
) {
  return ['v2', '/v2/apps/:app_id/deployments/:deployment_id/logs', args] as const
}

export function useGetV2AppsAppIdDeploymentsDeploymentIdLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
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
        ? getGetV2AppsAppIdDeploymentsDeploymentIdLogsKey(args)
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
                (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
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
          client.v2.apps[':app_id'].deployments[':deployment_id'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsAppIdDeploymentsDeploymentIdLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
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
        ? getGetV2AppsAppIdDeploymentsDeploymentIdLogsKey(args)
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
                (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
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
          client.v2.apps[':app_id'].deployments[':deployment_id'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AppsAppIdLogsKey(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['logs']['$get']>,
) {
  return ['v2', '/v2/apps/:app_id/logs', args] as const
}

export function useGetV2AppsAppIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>
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
        ? getGetV2AppsAppIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps[':app_id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsAppIdLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>
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
        ? getGetV2AppsAppIdLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps[':app_id'].logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AppsAppIdMetricsBandwidthDailyKey(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>,
) {
  return ['v2', '/v2/apps/:app_id/metrics/bandwidth_daily', args] as const
}

export function useGetV2AppsAppIdMetricsBandwidthDaily<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>
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
        ? getGetV2AppsAppIdMetricsBandwidthDailyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.apps[':app_id'].metrics.bandwidth_daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsAppIdMetricsBandwidthDaily<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>
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
        ? getGetV2AppsAppIdMetricsBandwidthDailyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.apps[':app_id'].metrics.bandwidth_daily.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AppsAppIdRollbackKey() {
  return ['v2', '/v2/apps/:app_id/rollback', 'POST'] as const
}

export function usePostV2AppsAppIdRollback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AppsAppIdRollbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['$post']> },
      ) => parseResponse(client.v2.apps[':app_id'].rollback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2AppsAppIdRollbackCommitKey() {
  return ['v2', '/v2/apps/:app_id/rollback/commit', 'POST'] as const
}

export function usePostV2AppsAppIdRollbackCommit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AppsAppIdRollbackCommitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>
        },
      ) => parseResponse(client.v2.apps[':app_id'].rollback.commit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2AppsAppIdRollbackRevertKey() {
  return ['v2', '/v2/apps/:app_id/rollback/revert', 'POST'] as const
}

export function usePostV2AppsAppIdRollbackRevert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AppsAppIdRollbackRevertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>
        },
      ) => parseResponse(client.v2.apps[':app_id'].rollback.revert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2AppsAppIdRollbackValidateKey() {
  return ['v2', '/v2/apps/:app_id/rollback/validate', 'POST'] as const
}

export function usePostV2AppsAppIdRollbackValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AppsAppIdRollbackValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>
        },
      ) => parseResponse(client.v2.apps[':app_id'].rollback.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AppsIdKey(args: InferRequestType<(typeof client.v2.apps)[':id']['$get']>) {
  return ['v2', '/v2/apps/:id', args] as const
}

export function useGetV2AppsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2AppsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AppsId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apps)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2AppsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2AppsIdKey() {
  return ['v2', '/v2/apps/:id', 'PUT'] as const
}

export function usePutV2AppsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apps)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2AppsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v2.apps)[':id']['$put']> }) =>
        parseResponse(client.v2.apps[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2AppsIdKey() {
  return ['v2', '/v2/apps/:id', 'DELETE'] as const
}

export function useDeleteV2AppsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apps)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2AppsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.apps)[':id']['$delete']> },
      ) => parseResponse(client.v2.apps[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CdnEndpointsKey(
  args: InferRequestType<typeof client.v2.cdn.endpoints.$get>,
) {
  return ['v2', '/v2/cdn/endpoints', args] as const
}

export function useGetV2CdnEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.v2.cdn.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CdnEndpointsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.cdn.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CdnEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.v2.cdn.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CdnEndpointsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.cdn.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CdnEndpointsKey() {
  return ['v2', '/v2/cdn/endpoints', 'POST'] as const
}

export function usePostV2CdnEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.cdn.endpoints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CdnEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.cdn.endpoints.$post> }) =>
        parseResponse(client.v2.cdn.endpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CdnEndpointsCdnIdKey(
  args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>,
) {
  return ['v2', '/v2/cdn/endpoints/:cdn_id', args] as const
}

export function useGetV2CdnEndpointsCdnId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>
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
        ? getGetV2CdnEndpointsCdnIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.cdn.endpoints[':cdn_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CdnEndpointsCdnId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>
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
        ? getGetV2CdnEndpointsCdnIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.cdn.endpoints[':cdn_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2CdnEndpointsCdnIdKey() {
  return ['v2', '/v2/cdn/endpoints/:cdn_id', 'PUT'] as const
}

export function usePutV2CdnEndpointsCdnId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2CdnEndpointsCdnIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']> },
      ) => parseResponse(client.v2.cdn.endpoints[':cdn_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2CdnEndpointsCdnIdKey() {
  return ['v2', '/v2/cdn/endpoints/:cdn_id', 'DELETE'] as const
}

export function useDeleteV2CdnEndpointsCdnId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CdnEndpointsCdnIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']> },
      ) => parseResponse(client.v2.cdn.endpoints[':cdn_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2CdnEndpointsCdnIdCacheKey() {
  return ['v2', '/v2/cdn/endpoints/:cdn_id/cache', 'DELETE'] as const
}

export function useDeleteV2CdnEndpointsCdnIdCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CdnEndpointsCdnIdCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>
        },
      ) => parseResponse(client.v2.cdn.endpoints[':cdn_id'].cache.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CertificatesKey(
  args: InferRequestType<typeof client.v2.certificates.$get>,
) {
  return ['v2', '/v2/certificates', args] as const
}

export function useGetV2Certificates<TError = unknown>(
  args: InferRequestType<typeof client.v2.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Certificates<TError = unknown>(
  args: InferRequestType<typeof client.v2.certificates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CertificatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CertificatesKey() {
  return ['v2', '/v2/certificates', 'POST'] as const
}

export function usePostV2Certificates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.certificates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CertificatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.certificates.$post> }) =>
        parseResponse(client.v2.certificates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CertificatesCertificateIdKey(
  args: InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$get']>,
) {
  return ['v2', '/v2/certificates/:certificate_id', args] as const
}

export function useGetV2CertificatesCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$get']>>
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
        ? getGetV2CertificatesCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.certificates[':certificate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CertificatesCertificateId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$get']>>
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
        ? getGetV2CertificatesCertificateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.certificates[':certificate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2CertificatesCertificateIdKey() {
  return ['v2', '/v2/certificates/:certificate_id', 'DELETE'] as const
}

export function useDeleteV2CertificatesCertificateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CertificatesCertificateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$delete']> },
      ) => parseResponse(client.v2.certificates[':certificate_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersMyBalanceKey() {
  return ['v2', '/v2/customers/my/balance'] as const
}

export function useGetV2CustomersMyBalance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.balance.$get>>>
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
        ? getGetV2CustomersMyBalanceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.balance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.my.balance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersMyBalance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.balance.$get>>>
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
        ? getGetV2CustomersMyBalanceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.balance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.my.balance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersMyBillingHistoryKey() {
  return ['v2', '/v2/customers/my/billing_history'] as const
}

export function useGetV2CustomersMyBillingHistory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.customers.my.billing_history.$get>>
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
        ? getGetV2CustomersMyBillingHistoryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.customers.my.billing_history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers.my.billing_history.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersMyBillingHistory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.customers.my.billing_history.$get>>
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
        ? getGetV2CustomersMyBillingHistoryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.customers.my.billing_history.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers.my.billing_history.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersMyInvoicesKey(
  args: InferRequestType<typeof client.v2.customers.my.invoices.$get>,
) {
  return ['v2', '/v2/customers/my/invoices', args] as const
}

export function useGetV2CustomersMyInvoices<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.my.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.invoices.$get>>>
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
        ? getGetV2CustomersMyInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.invoices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.my.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersMyInvoices<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.my.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.invoices.$get>>>
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
        ? getGetV2CustomersMyInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.invoices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.my.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersMyInvoicesInvoiceUuidKey(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>,
) {
  return ['v2', '/v2/customers/my/invoices/:invoice_uuid', args] as const
}

export function useGetV2CustomersMyInvoicesInvoiceUuid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>>
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
        ? getGetV2CustomersMyInvoicesInvoiceUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers.my.invoices[':invoice_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersMyInvoicesInvoiceUuid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>>
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
        ? getGetV2CustomersMyInvoicesInvoiceUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers.my.invoices[':invoice_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersMyInvoicesInvoiceUuidCsvKey(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>,
) {
  return ['v2', '/v2/customers/my/invoices/:invoice_uuid/csv', args] as const
}

export function useGetV2CustomersMyInvoicesInvoiceUuidCsv<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>
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
        ? getGetV2CustomersMyInvoicesInvoiceUuidCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.customers.my.invoices[':invoice_uuid'].csv.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersMyInvoicesInvoiceUuidCsv<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>
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
        ? getGetV2CustomersMyInvoicesInvoiceUuidCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.customers.my.invoices[':invoice_uuid'].csv.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersMyInvoicesInvoiceUuidPdfKey(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>,
) {
  return ['v2', '/v2/customers/my/invoices/:invoice_uuid/pdf', args] as const
}

export function useGetV2CustomersMyInvoicesInvoiceUuidPdf<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>
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
        ? getGetV2CustomersMyInvoicesInvoiceUuidPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.customers.my.invoices[':invoice_uuid'].pdf.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersMyInvoicesInvoiceUuidPdf<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>
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
        ? getGetV2CustomersMyInvoicesInvoiceUuidPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.customers.my.invoices[':invoice_uuid'].pdf.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersMyInvoicesInvoiceUuidSummaryKey(
  args: InferRequestType<
    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
  >,
) {
  return ['v2', '/v2/customers/my/invoices/:invoice_uuid/summary', args] as const
}

export function useGetV2CustomersMyInvoicesInvoiceUuidSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
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
        ? getGetV2CustomersMyInvoicesInvoiceUuidSummaryKey(args)
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
                (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
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
          client.v2.customers.my.invoices[':invoice_uuid'].summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersMyInvoicesInvoiceUuidSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
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
        ? getGetV2CustomersMyInvoicesInvoiceUuidSummaryKey(args)
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
                (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
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
          client.v2.customers.my.invoices[':invoice_uuid'].summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2DatabasesKey(args: InferRequestType<typeof client.v2.databases.$get>) {
  return ['v2', '/v2/databases', args] as const
}

export function useGetV2Databases<TError = unknown>(
  args: InferRequestType<typeof client.v2.databases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DatabasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.databases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Databases<TError = unknown>(
  args: InferRequestType<typeof client.v2.databases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DatabasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.databases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DatabasesKey() {
  return ['v2', '/v2/databases', 'POST'] as const
}

export function usePostV2Databases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.databases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DatabasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.databases.$post> }) =>
        parseResponse(client.v2.databases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesOptionsKey() {
  return ['v2', '/v2/databases/options'] as const
}

export function useGetV2DatabasesOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.options.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DatabasesOptionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.options.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.databases.options.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.options.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DatabasesOptionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.options.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.databases.options.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>>
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
        ? getGetV2DatabasesDatabaseClusterUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.databases[':database_cluster_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>>
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
        ? getGetV2DatabasesDatabaseClusterUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.databases[':database_cluster_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2DatabasesDatabaseClusterUuidKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid', 'DELETE'] as const
}

export function useDeleteV2DatabasesDatabaseClusterUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DatabasesDatabaseClusterUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>
        },
      ) => parseResponse(client.v2.databases[':database_cluster_uuid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidBackupsKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/backups', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidBackups<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].backups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidBackups<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].backups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidCaKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/ca', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidCa<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidCaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.databases[':database_cluster_uuid'].ca.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidCa<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidCaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.databases[':database_cluster_uuid'].ca.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidConfigKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/config', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidConfig<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidConfig<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV2DatabasesDatabaseClusterUuidConfigKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/config', 'PATCH'] as const
}

export function usePatchV2DatabasesDatabaseClusterUuidConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2DatabasesDatabaseClusterUuidConfigKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].config.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidDbsKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/dbs', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidDbs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidDbsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.databases[':database_cluster_uuid'].dbs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidDbs<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidDbsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.databases[':database_cluster_uuid'].dbs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DatabasesDatabaseClusterUuidDbsKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/dbs', 'POST'] as const
}

export function usePostV2DatabasesDatabaseClusterUuidDbs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DatabasesDatabaseClusterUuidDbsKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.databases[':database_cluster_uuid'].dbs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidDbsDatabaseNameKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/dbs/:database_name', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidDbsDatabaseName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
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
        ? getGetV2DatabasesDatabaseClusterUuidDbsDatabaseNameKey(args)
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
                (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
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
          client.v2.databases[':database_cluster_uuid'].dbs[':database_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidDbsDatabaseName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
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
        ? getGetV2DatabasesDatabaseClusterUuidDbsDatabaseNameKey(args)
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
                (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
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
          client.v2.databases[':database_cluster_uuid'].dbs[':database_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/dbs/:database_name', 'DELETE'] as const
}

export function useDeleteV2DatabasesDatabaseClusterUuidDbsDatabaseName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].dbs[':database_name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidEvictionPolicyKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/eviction_policy', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidEvictionPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
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
        ? getGetV2DatabasesDatabaseClusterUuidEvictionPolicyKey(args)
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
                (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
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
          client.v2.databases[':database_cluster_uuid'].eviction_policy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidEvictionPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
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
        ? getGetV2DatabasesDatabaseClusterUuidEvictionPolicyKey(args)
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
                (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
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
          client.v2.databases[':database_cluster_uuid'].eviction_policy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2DatabasesDatabaseClusterUuidEvictionPolicyKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/eviction_policy', 'PUT'] as const
}

export function usePutV2DatabasesDatabaseClusterUuidEvictionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2DatabasesDatabaseClusterUuidEvictionPolicyKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].eviction_policy.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidFirewallKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/firewall', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidFirewall<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidFirewallKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].firewall.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidFirewall<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidFirewallKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].firewall.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2DatabasesDatabaseClusterUuidFirewallKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/firewall', 'PUT'] as const
}

export function usePutV2DatabasesDatabaseClusterUuidFirewall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2DatabasesDatabaseClusterUuidFirewallKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].firewall.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2DatabasesDatabaseClusterUuidMaintenanceKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/maintenance', 'PUT'] as const
}

export function usePutV2DatabasesDatabaseClusterUuidMaintenance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2DatabasesDatabaseClusterUuidMaintenanceKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].maintenance.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2DatabasesDatabaseClusterUuidMigrateKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/migrate', 'PUT'] as const
}

export function usePutV2DatabasesDatabaseClusterUuidMigrate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2DatabasesDatabaseClusterUuidMigrateKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].migrate.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidOnlineMigrationKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/online-migration', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidOnlineMigration<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
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
        ? getGetV2DatabasesDatabaseClusterUuidOnlineMigrationKey(args)
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
                (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
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
          client.v2.databases[':database_cluster_uuid']['online-migration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidOnlineMigration<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
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
        ? getGetV2DatabasesDatabaseClusterUuidOnlineMigrationKey(args)
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
                (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
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
          client.v2.databases[':database_cluster_uuid']['online-migration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2DatabasesDatabaseClusterUuidOnlineMigrationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/online-migration', 'PUT'] as const
}

export function usePutV2DatabasesDatabaseClusterUuidOnlineMigration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2DatabasesDatabaseClusterUuidOnlineMigrationKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid']['online-migration'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdKey() {
  return [
    'v2',
    '/v2/databases/:database_cluster_uuid/online-migration/:migration_id',
    'DELETE',
  ] as const
}

export function useDeleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid']['online-migration'][
            ':migration_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidPoolsKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidPools<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidPoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].pools.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidPools<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidPoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].pools.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2DatabasesDatabaseClusterUuidPoolsKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools', 'POST'] as const
}

export function usePostV2DatabasesDatabaseClusterUuidPools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DatabasesDatabaseClusterUuidPoolsKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].pools.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidPoolsPoolNameKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools/:pool_name', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidPoolsPoolName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
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
        ? getGetV2DatabasesDatabaseClusterUuidPoolsPoolNameKey(args)
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
                (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
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
          client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidPoolsPoolName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
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
        ? getGetV2DatabasesDatabaseClusterUuidPoolsPoolNameKey(args)
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
                (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
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
          client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2DatabasesDatabaseClusterUuidPoolsPoolNameKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools/:pool_name', 'PUT'] as const
}

export function usePutV2DatabasesDatabaseClusterUuidPoolsPoolName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2DatabasesDatabaseClusterUuidPoolsPoolNameKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2DatabasesDatabaseClusterUuidPoolsPoolNameKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools/:pool_name', 'DELETE'] as const
}

export function useDeleteV2DatabasesDatabaseClusterUuidPoolsPoolName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DatabasesDatabaseClusterUuidPoolsPoolNameKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidReplicasKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/replicas', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidReplicas<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidReplicasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].replicas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidReplicas<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidReplicasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].replicas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2DatabasesDatabaseClusterUuidReplicasKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/replicas', 'POST'] as const
}

export function usePostV2DatabasesDatabaseClusterUuidReplicas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DatabasesDatabaseClusterUuidReplicasKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].replicas.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidReplicasReplicaNameKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/replicas/:replica_name', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidReplicasReplicaName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
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
        ? getGetV2DatabasesDatabaseClusterUuidReplicasReplicaNameKey(args)
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
                (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
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
          client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidReplicasReplicaName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
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
        ? getGetV2DatabasesDatabaseClusterUuidReplicasReplicaNameKey(args)
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
                (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
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
          client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/replicas/:replica_name', 'DELETE'] as const
}

export function useDeleteV2DatabasesDatabaseClusterUuidReplicasReplicaName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteKey() {
  return [
    'v2',
    '/v2/databases/:database_cluster_uuid/replicas/:replica_name/promote',
    'PUT',
  ] as const
}

export function usePutV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromote<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].promote.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2DatabasesDatabaseClusterUuidResizeKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/resize', 'PUT'] as const
}

export function usePutV2DatabasesDatabaseClusterUuidResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2DatabasesDatabaseClusterUuidResizeKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].resize.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidSqlModeKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/sql_mode', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidSqlMode<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidSqlModeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].sql_mode.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidSqlMode<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidSqlModeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].sql_mode.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2DatabasesDatabaseClusterUuidSqlModeKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/sql_mode', 'PUT'] as const
}

export function usePutV2DatabasesDatabaseClusterUuidSqlMode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2DatabasesDatabaseClusterUuidSqlModeKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].sql_mode.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2DatabasesDatabaseClusterUuidUpgradeKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/upgrade', 'PUT'] as const
}

export function usePutV2DatabasesDatabaseClusterUuidUpgrade<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2DatabasesDatabaseClusterUuidUpgradeKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].upgrade.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidUsersKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/users', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>
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
        ? getGetV2DatabasesDatabaseClusterUuidUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2DatabasesDatabaseClusterUuidUsersKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/users', 'POST'] as const
}

export function usePostV2DatabasesDatabaseClusterUuidUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DatabasesDatabaseClusterUuidUsersKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].users.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DatabasesDatabaseClusterUuidUsersUsernameKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/users/:username', args] as const
}

export function useGetV2DatabasesDatabaseClusterUuidUsersUsername<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
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
        ? getGetV2DatabasesDatabaseClusterUuidUsersUsernameKey(args)
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
                (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
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
          client.v2.databases[':database_cluster_uuid'].users[':username'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DatabasesDatabaseClusterUuidUsersUsername<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
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
        ? getGetV2DatabasesDatabaseClusterUuidUsersUsernameKey(args)
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
                (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
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
          client.v2.databases[':database_cluster_uuid'].users[':username'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2DatabasesDatabaseClusterUuidUsersUsernameKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/users/:username', 'DELETE'] as const
}

export function useDeleteV2DatabasesDatabaseClusterUuidUsersUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DatabasesDatabaseClusterUuidUsersUsernameKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].users[':username'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/users/:username/reset_auth', 'POST'] as const
}

export function usePostV2DatabasesDatabaseClusterUuidUsersUsernameResetAuth<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthKey()
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
            (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.databases[':database_cluster_uuid'].users[':username'].reset_auth.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DomainsKey(args: InferRequestType<typeof client.v2.domains.$get>) {
  return ['v2', '/v2/domains', args] as const
}

export function useGetV2Domains<TError = unknown>(
  args: InferRequestType<typeof client.v2.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Domains<TError = unknown>(
  args: InferRequestType<typeof client.v2.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DomainsKey() {
  return ['v2', '/v2/domains', 'POST'] as const
}

export function usePostV2Domains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.domains.$post> }) =>
        parseResponse(client.v2.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DomainsDomainNameKey(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['$get']>,
) {
  return ['v2', '/v2/domains/:domain_name', args] as const
}

export function useGetV2DomainsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$get']>>
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
        ? getGetV2DomainsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.domains[':domain_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DomainsDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$get']>>
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
        ? getGetV2DomainsDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.domains[':domain_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2DomainsDomainNameKey() {
  return ['v2', '/v2/domains/:domain_name', 'DELETE'] as const
}

export function useDeleteV2DomainsDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.domains)[':domain_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DomainsDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.domains)[':domain_name']['$delete']> },
      ) => parseResponse(client.v2.domains[':domain_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DomainsDomainNameRecordsKey(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$get']>,
) {
  return ['v2', '/v2/domains/:domain_name/records', args] as const
}

export function useGetV2DomainsDomainNameRecords<TError = unknown>(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$get']>>
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
        ? getGetV2DomainsDomainNameRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.domains[':domain_name'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DomainsDomainNameRecords<TError = unknown>(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$get']>>
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
        ? getGetV2DomainsDomainNameRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.domains[':domain_name'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DomainsDomainNameRecordsKey() {
  return ['v2', '/v2/domains/:domain_name/records', 'POST'] as const
}

export function usePostV2DomainsDomainNameRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DomainsDomainNameRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$post']>
        },
      ) => parseResponse(client.v2.domains[':domain_name'].records.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DomainsDomainNameRecordsDomainRecordIdKey(
  args: InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
  >,
) {
  return ['v2', '/v2/domains/:domain_name/records/:domain_record_id', args] as const
}

export function useGetV2DomainsDomainNameRecordsDomainRecordId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
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
        ? getGetV2DomainsDomainNameRecordsDomainRecordIdKey(args)
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
                (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
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
          client.v2.domains[':domain_name'].records[':domain_record_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DomainsDomainNameRecordsDomainRecordId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
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
        ? getGetV2DomainsDomainNameRecordsDomainRecordIdKey(args)
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
                (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
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
          client.v2.domains[':domain_name'].records[':domain_record_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2DomainsDomainNameRecordsDomainRecordIdKey() {
  return ['v2', '/v2/domains/:domain_name/records/:domain_record_id', 'PUT'] as const
}

export function usePutV2DomainsDomainNameRecordsDomainRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2DomainsDomainNameRecordsDomainRecordIdKey()
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
            (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.domains[':domain_name'].records[':domain_record_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2DomainsDomainNameRecordsDomainRecordIdKey() {
  return ['v2', '/v2/domains/:domain_name/records/:domain_record_id', 'DELETE'] as const
}

export function useDeleteV2DomainsDomainNameRecordsDomainRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DomainsDomainNameRecordsDomainRecordIdKey()
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
            (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.domains[':domain_name'].records[':domain_record_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2DomainsDomainNameRecordsDomainRecordIdKey() {
  return ['v2', '/v2/domains/:domain_name/records/:domain_record_id', 'PATCH'] as const
}

export function usePatchV2DomainsDomainNameRecordsDomainRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2DomainsDomainNameRecordsDomainRecordIdKey()
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
            (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.domains[':domain_name'].records[':domain_record_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DropletsKey(args: InferRequestType<typeof client.v2.droplets.$get>) {
  return ['v2', '/v2/droplets', args] as const
}

export function useGetV2Droplets<TError = unknown>(
  args: InferRequestType<typeof client.v2.droplets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DropletsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.droplets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Droplets<TError = unknown>(
  args: InferRequestType<typeof client.v2.droplets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DropletsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.droplets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DropletsKey() {
  return ['v2', '/v2/droplets', 'POST'] as const
}

export function usePostV2Droplets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.droplets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DropletsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.droplets.$post> }) =>
        parseResponse(client.v2.droplets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2DropletsKey() {
  return ['v2', '/v2/droplets', 'DELETE'] as const
}

export function useDeleteV2Droplets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.droplets.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DropletsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.droplets.$delete> }) =>
        parseResponse(client.v2.droplets.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2DropletsActionsKey() {
  return ['v2', '/v2/droplets/actions', 'POST'] as const
}

export function usePostV2DropletsActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.actions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.droplets.actions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DropletsActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.droplets.actions.$post> }) =>
        parseResponse(client.v2.droplets.actions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DropletsDropletIdKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id', args] as const
}

export function useGetV2DropletsDropletId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$get']>>
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
        ? getGetV2DropletsDropletIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.droplets[':droplet_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DropletsDropletId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$get']>>
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
        ? getGetV2DropletsDropletIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.droplets[':droplet_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2DropletsDropletIdKey() {
  return ['v2', '/v2/droplets/:droplet_id', 'DELETE'] as const
}

export function useDeleteV2DropletsDropletId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DropletsDropletIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$delete']> },
      ) => parseResponse(client.v2.droplets[':droplet_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DropletsDropletIdActionsKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id/actions', args] as const
}

export function useGetV2DropletsDropletIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>>
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
        ? getGetV2DropletsDropletIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.droplets[':droplet_id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DropletsDropletIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>>
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
        ? getGetV2DropletsDropletIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.droplets[':droplet_id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DropletsDropletIdActionsKey() {
  return ['v2', '/v2/droplets/:droplet_id/actions', 'POST'] as const
}

export function usePostV2DropletsDropletIdActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DropletsDropletIdActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>
        },
      ) => parseResponse(client.v2.droplets[':droplet_id'].actions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DropletsDropletIdActionsActionIdKey(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
  >,
) {
  return ['v2', '/v2/droplets/:droplet_id/actions/:action_id', args] as const
}

export function useGetV2DropletsDropletIdActionsActionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
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
        ? getGetV2DropletsDropletIdActionsActionIdKey(args)
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
                (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
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
          client.v2.droplets[':droplet_id'].actions[':action_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DropletsDropletIdActionsActionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
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
        ? getGetV2DropletsDropletIdActionsActionIdKey(args)
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
                (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
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
          client.v2.droplets[':droplet_id'].actions[':action_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2DropletsDropletIdBackupsKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id/backups', args] as const
}

export function useGetV2DropletsDropletIdBackups<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>>
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
        ? getGetV2DropletsDropletIdBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.droplets[':droplet_id'].backups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DropletsDropletIdBackups<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>>
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
        ? getGetV2DropletsDropletIdBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.droplets[':droplet_id'].backups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DropletsDropletIdDestroyWithAssociatedResourcesKey(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
  >,
) {
  return ['v2', '/v2/droplets/:droplet_id/destroy_with_associated_resources', args] as const
}

export function useGetV2DropletsDropletIdDestroyWithAssociatedResources<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
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
        ? getGetV2DropletsDropletIdDestroyWithAssociatedResourcesKey(args)
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
                (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
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
          client.v2.droplets[':droplet_id'].destroy_with_associated_resources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DropletsDropletIdDestroyWithAssociatedResources<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
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
        ? getGetV2DropletsDropletIdDestroyWithAssociatedResourcesKey(args)
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
                (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
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
          client.v2.droplets[':droplet_id'].destroy_with_associated_resources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousKey() {
  return [
    'v2',
    '/v2/droplets/:droplet_id/destroy_with_associated_resources/dangerous',
    'DELETE',
  ] as const
}

export function useDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerous<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousKey()
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
            (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.droplets[':droplet_id'].destroy_with_associated_resources.dangerous.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2DropletsDropletIdDestroyWithAssociatedResourcesRetryKey() {
  return ['v2', '/v2/droplets/:droplet_id/destroy_with_associated_resources/retry', 'POST'] as const
}

export function usePostV2DropletsDropletIdDestroyWithAssociatedResourcesRetry<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DropletsDropletIdDestroyWithAssociatedResourcesRetryKey()
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
            (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.droplets[':droplet_id'].destroy_with_associated_resources.retry.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveKey() {
  return [
    'v2',
    '/v2/droplets/:droplet_id/destroy_with_associated_resources/selective',
    'DELETE',
  ] as const
}

export function useDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelective<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveKey()
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
            (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.droplets[':droplet_id'].destroy_with_associated_resources.selective.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DropletsDropletIdDestroyWithAssociatedResourcesStatusKey(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
  >,
) {
  return ['v2', '/v2/droplets/:droplet_id/destroy_with_associated_resources/status', args] as const
}

export function useGetV2DropletsDropletIdDestroyWithAssociatedResourcesStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
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
        ? getGetV2DropletsDropletIdDestroyWithAssociatedResourcesStatusKey(args)
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
                (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
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
          client.v2.droplets[':droplet_id'].destroy_with_associated_resources.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DropletsDropletIdDestroyWithAssociatedResourcesStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
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
        ? getGetV2DropletsDropletIdDestroyWithAssociatedResourcesStatusKey(args)
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
                (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
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
          client.v2.droplets[':droplet_id'].destroy_with_associated_resources.status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2DropletsDropletIdFirewallsKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id/firewalls', args] as const
}

export function useGetV2DropletsDropletIdFirewalls<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>>
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
        ? getGetV2DropletsDropletIdFirewallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.droplets[':droplet_id'].firewalls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DropletsDropletIdFirewalls<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>>
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
        ? getGetV2DropletsDropletIdFirewallsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.droplets[':droplet_id'].firewalls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DropletsDropletIdKernelsKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id/kernels', args] as const
}

export function useGetV2DropletsDropletIdKernels<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>>
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
        ? getGetV2DropletsDropletIdKernelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.droplets[':droplet_id'].kernels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DropletsDropletIdKernels<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>>
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
        ? getGetV2DropletsDropletIdKernelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.droplets[':droplet_id'].kernels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DropletsDropletIdNeighborsKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id/neighbors', args] as const
}

export function useGetV2DropletsDropletIdNeighbors<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>>
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
        ? getGetV2DropletsDropletIdNeighborsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.droplets[':droplet_id'].neighbors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DropletsDropletIdNeighbors<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>>
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
        ? getGetV2DropletsDropletIdNeighborsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.droplets[':droplet_id'].neighbors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DropletsDropletIdSnapshotsKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id/snapshots', args] as const
}

export function useGetV2DropletsDropletIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>>
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
        ? getGetV2DropletsDropletIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.droplets[':droplet_id'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DropletsDropletIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>>
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
        ? getGetV2DropletsDropletIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.droplets[':droplet_id'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2FirewallsKey(args: InferRequestType<typeof client.v2.firewalls.$get>) {
  return ['v2', '/v2/firewalls', args] as const
}

export function useGetV2Firewalls<TError = unknown>(
  args: InferRequestType<typeof client.v2.firewalls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2FirewallsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.firewalls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Firewalls<TError = unknown>(
  args: InferRequestType<typeof client.v2.firewalls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2FirewallsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.firewalls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2FirewallsKey() {
  return ['v2', '/v2/firewalls', 'POST'] as const
}

export function usePostV2Firewalls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.firewalls.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FirewallsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.firewalls.$post> }) =>
        parseResponse(client.v2.firewalls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2FirewallsFirewallIdKey(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$get']>,
) {
  return ['v2', '/v2/firewalls/:firewall_id', args] as const
}

export function useGetV2FirewallsFirewallId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>
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
        ? getGetV2FirewallsFirewallIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.firewalls[':firewall_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FirewallsFirewallId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>
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
        ? getGetV2FirewallsFirewallIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.firewalls[':firewall_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2FirewallsFirewallIdKey() {
  return ['v2', '/v2/firewalls/:firewall_id', 'PUT'] as const
}

export function usePutV2FirewallsFirewallId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2FirewallsFirewallIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$put']> },
      ) => parseResponse(client.v2.firewalls[':firewall_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2FirewallsFirewallIdKey() {
  return ['v2', '/v2/firewalls/:firewall_id', 'DELETE'] as const
}

export function useDeleteV2FirewallsFirewallId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2FirewallsFirewallIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$delete']> },
      ) => parseResponse(client.v2.firewalls[':firewall_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2FirewallsFirewallIdDropletsKey() {
  return ['v2', '/v2/firewalls/:firewall_id/droplets', 'POST'] as const
}

export function usePostV2FirewallsFirewallIdDroplets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FirewallsFirewallIdDropletsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>
        },
      ) => parseResponse(client.v2.firewalls[':firewall_id'].droplets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2FirewallsFirewallIdDropletsKey() {
  return ['v2', '/v2/firewalls/:firewall_id/droplets', 'DELETE'] as const
}

export function useDeleteV2FirewallsFirewallIdDroplets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2FirewallsFirewallIdDropletsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>
        },
      ) => parseResponse(client.v2.firewalls[':firewall_id'].droplets.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2FirewallsFirewallIdRulesKey() {
  return ['v2', '/v2/firewalls/:firewall_id/rules', 'POST'] as const
}

export function usePostV2FirewallsFirewallIdRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FirewallsFirewallIdRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>
        },
      ) => parseResponse(client.v2.firewalls[':firewall_id'].rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2FirewallsFirewallIdRulesKey() {
  return ['v2', '/v2/firewalls/:firewall_id/rules', 'DELETE'] as const
}

export function useDeleteV2FirewallsFirewallIdRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2FirewallsFirewallIdRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>
        },
      ) => parseResponse(client.v2.firewalls[':firewall_id'].rules.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2FirewallsFirewallIdTagsKey() {
  return ['v2', '/v2/firewalls/:firewall_id/tags', 'POST'] as const
}

export function usePostV2FirewallsFirewallIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FirewallsFirewallIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']> },
      ) => parseResponse(client.v2.firewalls[':firewall_id'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2FirewallsFirewallIdTagsKey() {
  return ['v2', '/v2/firewalls/:firewall_id/tags', 'DELETE'] as const
}

export function useDeleteV2FirewallsFirewallIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2FirewallsFirewallIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>
        },
      ) => parseResponse(client.v2.firewalls[':firewall_id'].tags.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2FloatingIpsKey(args: InferRequestType<typeof client.v2.floating_ips.$get>) {
  return ['v2', '/v2/floating_ips', args] as const
}

export function useGetV2FloatingIps<TError = unknown>(
  args: InferRequestType<typeof client.v2.floating_ips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2FloatingIpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.floating_ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FloatingIps<TError = unknown>(
  args: InferRequestType<typeof client.v2.floating_ips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2FloatingIpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.floating_ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2FloatingIpsKey() {
  return ['v2', '/v2/floating_ips', 'POST'] as const
}

export function usePostV2FloatingIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.floating_ips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FloatingIpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.floating_ips.$post> }) =>
        parseResponse(client.v2.floating_ips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2FloatingIpsFloatingIpKey(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>,
) {
  return ['v2', '/v2/floating_ips/:floating_ip', args] as const
}

export function useGetV2FloatingIpsFloatingIp<TError = unknown>(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>
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
        ? getGetV2FloatingIpsFloatingIpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.floating_ips[':floating_ip'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FloatingIpsFloatingIp<TError = unknown>(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>
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
        ? getGetV2FloatingIpsFloatingIpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.floating_ips[':floating_ip'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2FloatingIpsFloatingIpKey() {
  return ['v2', '/v2/floating_ips/:floating_ip', 'DELETE'] as const
}

export function useDeleteV2FloatingIpsFloatingIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2FloatingIpsFloatingIpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']> },
      ) => parseResponse(client.v2.floating_ips[':floating_ip'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2FloatingIpsFloatingIpActionsKey(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>,
) {
  return ['v2', '/v2/floating_ips/:floating_ip/actions', args] as const
}

export function useGetV2FloatingIpsFloatingIpActions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>>
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
        ? getGetV2FloatingIpsFloatingIpActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.floating_ips[':floating_ip'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FloatingIpsFloatingIpActions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>>
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
        ? getGetV2FloatingIpsFloatingIpActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.floating_ips[':floating_ip'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2FloatingIpsFloatingIpActionsKey() {
  return ['v2', '/v2/floating_ips/:floating_ip/actions', 'POST'] as const
}

export function usePostV2FloatingIpsFloatingIpActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FloatingIpsFloatingIpActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>
        },
      ) => parseResponse(client.v2.floating_ips[':floating_ip'].actions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2FloatingIpsFloatingIpActionsActionIdKey(
  args: InferRequestType<
    (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
  >,
) {
  return ['v2', '/v2/floating_ips/:floating_ip/actions/:action_id', args] as const
}

export function useGetV2FloatingIpsFloatingIpActionsActionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
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
        ? getGetV2FloatingIpsFloatingIpActionsActionIdKey(args)
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
                (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
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
          client.v2.floating_ips[':floating_ip'].actions[':action_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FloatingIpsFloatingIpActionsActionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
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
        ? getGetV2FloatingIpsFloatingIpActionsActionIdKey(args)
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
                (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
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
          client.v2.floating_ips[':floating_ip'].actions[':action_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2FunctionsNamespacesKey() {
  return ['v2', '/v2/functions/namespaces'] as const
}

export function useGetV2FunctionsNamespaces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$get>>>
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
        ? getGetV2FunctionsNamespacesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.functions.namespaces.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FunctionsNamespaces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$get>>>
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
        ? getGetV2FunctionsNamespacesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.functions.namespaces.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2FunctionsNamespacesKey() {
  return ['v2', '/v2/functions/namespaces', 'POST'] as const
}

export function usePostV2FunctionsNamespaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.functions.namespaces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FunctionsNamespacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.functions.namespaces.$post> },
      ) => parseResponse(client.v2.functions.namespaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2FunctionsNamespacesNamespaceIdKey(
  args: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>,
) {
  return ['v2', '/v2/functions/namespaces/:namespace_id', args] as const
}

export function useGetV2FunctionsNamespacesNamespaceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>>
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
        ? getGetV2FunctionsNamespacesNamespaceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.functions.namespaces[':namespace_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FunctionsNamespacesNamespaceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>>
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
        ? getGetV2FunctionsNamespacesNamespaceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.functions.namespaces[':namespace_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2FunctionsNamespacesNamespaceIdKey() {
  return ['v2', '/v2/functions/namespaces/:namespace_id', 'DELETE'] as const
}

export function useDeleteV2FunctionsNamespacesNamespaceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2FunctionsNamespacesNamespaceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>
        },
      ) =>
        parseResponse(client.v2.functions.namespaces[':namespace_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2FunctionsNamespacesNamespaceIdTriggersKey(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
  >,
) {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers', args] as const
}

export function useGetV2FunctionsNamespacesNamespaceIdTriggers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
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
        ? getGetV2FunctionsNamespacesNamespaceIdTriggersKey(args)
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
                (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
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
          client.v2.functions.namespaces[':namespace_id'].triggers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FunctionsNamespacesNamespaceIdTriggers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
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
        ? getGetV2FunctionsNamespacesNamespaceIdTriggersKey(args)
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
                (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
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
          client.v2.functions.namespaces[':namespace_id'].triggers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2FunctionsNamespacesNamespaceIdTriggersKey() {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers', 'POST'] as const
}

export function usePostV2FunctionsNamespacesNamespaceIdTriggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FunctionsNamespacesNamespaceIdTriggersKey()
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
            (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.functions.namespaces[':namespace_id'].triggers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2FunctionsNamespacesNamespaceIdTriggersTriggerNameKey(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
  >,
) {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers/:trigger_name', args] as const
}

export function useGetV2FunctionsNamespacesNamespaceIdTriggersTriggerName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
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
        ? getGetV2FunctionsNamespacesNamespaceIdTriggersTriggerNameKey(args)
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
                (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
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
          client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FunctionsNamespacesNamespaceIdTriggersTriggerName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
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
        ? getGetV2FunctionsNamespacesNamespaceIdTriggersTriggerNameKey(args)
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
                (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
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
          client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2FunctionsNamespacesNamespaceIdTriggersTriggerNameKey() {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers/:trigger_name', 'PUT'] as const
}

export function usePutV2FunctionsNamespacesNamespaceIdTriggersTriggerName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2FunctionsNamespacesNamespaceIdTriggersTriggerNameKey()
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
            (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameKey() {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers/:trigger_name', 'DELETE'] as const
}

export function useDeleteV2FunctionsNamespacesNamespaceIdTriggersTriggerName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameKey()
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
            (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ImagesKey(args: InferRequestType<typeof client.v2.images.$get>) {
  return ['v2', '/v2/images', args] as const
}

export function useGetV2Images<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ImagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Images<TError = unknown>(
  args: InferRequestType<typeof client.v2.images.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ImagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ImagesKey() {
  return ['v2', '/v2/images', 'POST'] as const
}

export function usePostV2Images<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.images.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.images.$post> }) =>
        parseResponse(client.v2.images.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ImagesImageIdKey(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['$get']>,
) {
  return ['v2', '/v2/images/:image_id', args] as const
}

export function useGetV2ImagesImageId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$get']>>>
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
        ? getGetV2ImagesImageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images[':image_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesImageId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$get']>>>
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
        ? getGetV2ImagesImageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images[':image_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2ImagesImageIdKey() {
  return ['v2', '/v2/images/:image_id', 'PUT'] as const
}

export function usePutV2ImagesImageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.images)[':image_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ImagesImageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.images)[':image_id']['$put']> },
      ) => parseResponse(client.v2.images[':image_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ImagesImageIdKey() {
  return ['v2', '/v2/images/:image_id', 'DELETE'] as const
}

export function useDeleteV2ImagesImageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.images)[':image_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ImagesImageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.images)[':image_id']['$delete']> },
      ) => parseResponse(client.v2.images[':image_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ImagesImageIdActionsKey(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$get']>,
) {
  return ['v2', '/v2/images/:image_id/actions', args] as const
}

export function useGetV2ImagesImageIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$get']>>
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
        ? getGetV2ImagesImageIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images[':image_id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesImageIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$get']>>
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
        ? getGetV2ImagesImageIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.images[':image_id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ImagesImageIdActionsKey() {
  return ['v2', '/v2/images/:image_id/actions', 'POST'] as const
}

export function usePostV2ImagesImageIdActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ImagesImageIdActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$post']> },
      ) => parseResponse(client.v2.images[':image_id'].actions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ImagesImageIdActionsActionIdKey(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>,
) {
  return ['v2', '/v2/images/:image_id/actions/:action_id', args] as const
}

export function useGetV2ImagesImageIdActionsActionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>
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
        ? getGetV2ImagesImageIdActionsActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.images[':image_id'].actions[':action_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ImagesImageIdActionsActionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>
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
        ? getGetV2ImagesImageIdActionsActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.images[':image_id'].actions[':action_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2KubernetesClustersKey(
  args: InferRequestType<typeof client.v2.kubernetes.clusters.$get>,
) {
  return ['v2', '/v2/kubernetes/clusters', args] as const
}

export function useGetV2KubernetesClusters<TError = unknown>(
  args: InferRequestType<typeof client.v2.kubernetes.clusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$get>>>
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
        ? getGetV2KubernetesClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.kubernetes.clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KubernetesClusters<TError = unknown>(
  args: InferRequestType<typeof client.v2.kubernetes.clusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$get>>>
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
        ? getGetV2KubernetesClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.kubernetes.clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2KubernetesClustersKey() {
  return ['v2', '/v2/kubernetes/clusters', 'POST'] as const
}

export function usePostV2KubernetesClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.kubernetes.clusters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2KubernetesClustersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.kubernetes.clusters.$post> },
      ) => parseResponse(client.v2.kubernetes.clusters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2KubernetesClustersClusterIdKey(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id', args] as const
}

export function useGetV2KubernetesClustersClusterId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>>
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
        ? getGetV2KubernetesClustersClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KubernetesClustersClusterId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>>
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
        ? getGetV2KubernetesClustersClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2KubernetesClustersClusterIdKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id', 'PUT'] as const
}

export function usePutV2KubernetesClustersClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2KubernetesClustersClusterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']> },
      ) => parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2KubernetesClustersClusterIdKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id', 'DELETE'] as const
}

export function useDeleteV2KubernetesClustersClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2KubernetesClustersClusterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>
        },
      ) => parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2KubernetesClustersClusterIdClusterlintKey(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/clusterlint', args] as const
}

export function useGetV2KubernetesClustersClusterIdClusterlint<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
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
        ? getGetV2KubernetesClustersClusterIdClusterlintKey(args)
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
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
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
          client.v2.kubernetes.clusters[':cluster_id'].clusterlint.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KubernetesClustersClusterIdClusterlint<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
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
        ? getGetV2KubernetesClustersClusterIdClusterlintKey(args)
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
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
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
          client.v2.kubernetes.clusters[':cluster_id'].clusterlint.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2KubernetesClustersClusterIdClusterlintKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/clusterlint', 'POST'] as const
}

export function usePostV2KubernetesClustersClusterIdClusterlint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2KubernetesClustersClusterIdClusterlintKey()
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
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].clusterlint.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2KubernetesClustersClusterIdCredentialsKey(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/credentials', args] as const
}

export function useGetV2KubernetesClustersClusterIdCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
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
        ? getGetV2KubernetesClustersClusterIdCredentialsKey(args)
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
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
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
          client.v2.kubernetes.clusters[':cluster_id'].credentials.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KubernetesClustersClusterIdCredentials<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
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
        ? getGetV2KubernetesClustersClusterIdCredentialsKey(args)
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
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
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
          client.v2.kubernetes.clusters[':cluster_id'].credentials.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesKey(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
  >,
) {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/destroy_with_associated_resources',
    args,
  ] as const
}

export function useGetV2KubernetesClustersClusterIdDestroyWithAssociatedResources<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
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
        ? getGetV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesKey(args)
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
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
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
          client.v2.kubernetes.clusters[':cluster_id'].destroy_with_associated_resources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KubernetesClustersClusterIdDestroyWithAssociatedResources<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
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
        ? getGetV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesKey(args)
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
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
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
          client.v2.kubernetes.clusters[':cluster_id'].destroy_with_associated_resources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousKey() {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/destroy_with_associated_resources/dangerous',
    'DELETE',
  ] as const
}

export function useDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerous<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousKey()
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
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.kubernetes.clusters[
            ':cluster_id'
          ].destroy_with_associated_resources.dangerous.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveKey() {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/destroy_with_associated_resources/selective',
    'DELETE',
  ] as const
}

export function useDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelective<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveKey()
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
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.kubernetes.clusters[
            ':cluster_id'
          ].destroy_with_associated_resources.selective.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2KubernetesClustersClusterIdKubeconfigKey(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/kubeconfig', args] as const
}

export function useGetV2KubernetesClustersClusterIdKubeconfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
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
        ? getGetV2KubernetesClustersClusterIdKubeconfigKey(args)
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
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
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
          client.v2.kubernetes.clusters[':cluster_id'].kubeconfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KubernetesClustersClusterIdKubeconfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
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
        ? getGetV2KubernetesClustersClusterIdKubeconfigKey(args)
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
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
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
          client.v2.kubernetes.clusters[':cluster_id'].kubeconfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2KubernetesClustersClusterIdNodePoolsKey(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools', args] as const
}

export function useGetV2KubernetesClustersClusterIdNodePools<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
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
        ? getGetV2KubernetesClustersClusterIdNodePoolsKey(args)
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
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
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
          client.v2.kubernetes.clusters[':cluster_id'].node_pools.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KubernetesClustersClusterIdNodePools<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
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
        ? getGetV2KubernetesClustersClusterIdNodePoolsKey(args)
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
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
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
          client.v2.kubernetes.clusters[':cluster_id'].node_pools.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2KubernetesClustersClusterIdNodePoolsKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools', 'POST'] as const
}

export function usePostV2KubernetesClustersClusterIdNodePools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2KubernetesClustersClusterIdNodePoolsKey()
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
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].node_pools.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2KubernetesClustersClusterIdNodePoolsNodePoolIdKey(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id', args] as const
}

export function useGetV2KubernetesClustersClusterIdNodePoolsNodePoolId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
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
        ? getGetV2KubernetesClustersClusterIdNodePoolsNodePoolIdKey(args)
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
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
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
          client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KubernetesClustersClusterIdNodePoolsNodePoolId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
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
        ? getGetV2KubernetesClustersClusterIdNodePoolsNodePoolIdKey(args)
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
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
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
          client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2KubernetesClustersClusterIdNodePoolsNodePoolIdKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id', 'PUT'] as const
}

export function usePutV2KubernetesClustersClusterIdNodePoolsNodePoolId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2KubernetesClustersClusterIdNodePoolsNodePoolIdKey()
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
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id', 'DELETE'] as const
}

export function useDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdKey()
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
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdKey() {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id/nodes/:node_id',
    'DELETE',
  ] as const
}

export function useDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdKey()
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
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].nodes[
            ':node_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleKey() {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id/recycle',
    'POST',
  ] as const
}

export function usePostV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycle<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleKey()
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
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].recycle.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2KubernetesClustersClusterIdUpgradeKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/upgrade', 'POST'] as const
}

export function usePostV2KubernetesClustersClusterIdUpgrade<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2KubernetesClustersClusterIdUpgradeKey()
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
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].upgrade.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2KubernetesClustersClusterIdUpgradesKey(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/upgrades', args] as const
}

export function useGetV2KubernetesClustersClusterIdUpgrades<TError = unknown>(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>
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
        ? getGetV2KubernetesClustersClusterIdUpgradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].upgrades.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KubernetesClustersClusterIdUpgrades<TError = unknown>(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>
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
        ? getGetV2KubernetesClustersClusterIdUpgradesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].upgrades.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2KubernetesClustersClusterIdUserKey(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/user', args] as const
}

export function useGetV2KubernetesClustersClusterIdUser<TError = unknown>(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>
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
        ? getGetV2KubernetesClustersClusterIdUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.kubernetes.clusters[':cluster_id'].user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KubernetesClustersClusterIdUser<TError = unknown>(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>
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
        ? getGetV2KubernetesClustersClusterIdUserKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.kubernetes.clusters[':cluster_id'].user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2KubernetesOptionsKey() {
  return ['v2', '/v2/kubernetes/options'] as const
}

export function useGetV2KubernetesOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.options.$get>>>
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
        ? getGetV2KubernetesOptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.options.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.kubernetes.options.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KubernetesOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.options.$get>>>
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
        ? getGetV2KubernetesOptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.options.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.kubernetes.options.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2KubernetesRegistryKey() {
  return ['v2', '/v2/kubernetes/registry', 'POST'] as const
}

export function usePostV2KubernetesRegistry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.registry.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.kubernetes.registry.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2KubernetesRegistryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.kubernetes.registry.$post> },
      ) => parseResponse(client.v2.kubernetes.registry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2KubernetesRegistryKey() {
  return ['v2', '/v2/kubernetes/registry', 'DELETE'] as const
}

export function useDeleteV2KubernetesRegistry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.registry.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.kubernetes.registry.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2KubernetesRegistryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.kubernetes.registry.$delete> },
      ) => parseResponse(client.v2.kubernetes.registry.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LoadBalancersKey(
  args: InferRequestType<typeof client.v2.load_balancers.$get>,
) {
  return ['v2', '/v2/load_balancers', args] as const
}

export function useGetV2LoadBalancers<TError = unknown>(
  args: InferRequestType<typeof client.v2.load_balancers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$get>>>>
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
        ? getGetV2LoadBalancersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.load_balancers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LoadBalancers<TError = unknown>(
  args: InferRequestType<typeof client.v2.load_balancers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$get>>>>
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
        ? getGetV2LoadBalancersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.load_balancers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2LoadBalancersKey() {
  return ['v2', '/v2/load_balancers', 'POST'] as const
}

export function usePostV2LoadBalancers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.load_balancers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoadBalancersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.load_balancers.$post> }) =>
        parseResponse(client.v2.load_balancers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LoadBalancersLbIdKey(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$get']>,
) {
  return ['v2', '/v2/load_balancers/:lb_id', args] as const
}

export function useGetV2LoadBalancersLbId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>
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
        ? getGetV2LoadBalancersLbIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.load_balancers[':lb_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LoadBalancersLbId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>
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
        ? getGetV2LoadBalancersLbIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.load_balancers[':lb_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2LoadBalancersLbIdKey() {
  return ['v2', '/v2/load_balancers/:lb_id', 'PUT'] as const
}

export function usePutV2LoadBalancersLbId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2LoadBalancersLbIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$put']> },
      ) => parseResponse(client.v2.load_balancers[':lb_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2LoadBalancersLbIdKey() {
  return ['v2', '/v2/load_balancers/:lb_id', 'DELETE'] as const
}

export function useDeleteV2LoadBalancersLbId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2LoadBalancersLbIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$delete']> },
      ) => parseResponse(client.v2.load_balancers[':lb_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LoadBalancersLbIdDropletsKey() {
  return ['v2', '/v2/load_balancers/:lb_id/droplets', 'POST'] as const
}

export function usePostV2LoadBalancersLbIdDroplets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoadBalancersLbIdDropletsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>
        },
      ) => parseResponse(client.v2.load_balancers[':lb_id'].droplets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2LoadBalancersLbIdDropletsKey() {
  return ['v2', '/v2/load_balancers/:lb_id/droplets', 'DELETE'] as const
}

export function useDeleteV2LoadBalancersLbIdDroplets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2LoadBalancersLbIdDropletsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>
        },
      ) => parseResponse(client.v2.load_balancers[':lb_id'].droplets.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LoadBalancersLbIdForwardingRulesKey() {
  return ['v2', '/v2/load_balancers/:lb_id/forwarding_rules', 'POST'] as const
}

export function usePostV2LoadBalancersLbIdForwardingRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LoadBalancersLbIdForwardingRulesKey()
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
            (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.load_balancers[':lb_id'].forwarding_rules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2LoadBalancersLbIdForwardingRulesKey() {
  return ['v2', '/v2/load_balancers/:lb_id/forwarding_rules', 'DELETE'] as const
}

export function useDeleteV2LoadBalancersLbIdForwardingRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2LoadBalancersLbIdForwardingRulesKey()
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
            (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.load_balancers[':lb_id'].forwarding_rules.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2MonitoringAlertsKey(
  args: InferRequestType<typeof client.v2.monitoring.alerts.$get>,
) {
  return ['v2', '/v2/monitoring/alerts', args] as const
}

export function useGetV2MonitoringAlerts<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$get>>>
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
        ? getGetV2MonitoringAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.monitoring.alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MonitoringAlerts<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.alerts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$get>>>
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
        ? getGetV2MonitoringAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.monitoring.alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2MonitoringAlertsKey() {
  return ['v2', '/v2/monitoring/alerts', 'POST'] as const
}

export function usePostV2MonitoringAlerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.monitoring.alerts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2MonitoringAlertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.monitoring.alerts.$post> },
      ) => parseResponse(client.v2.monitoring.alerts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2MonitoringAlertsAlertUuidKey(
  args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>,
) {
  return ['v2', '/v2/monitoring/alerts/:alert_uuid', args] as const
}

export function useGetV2MonitoringAlertsAlertUuid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>>
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
        ? getGetV2MonitoringAlertsAlertUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MonitoringAlertsAlertUuid<TError = unknown>(
  args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>>
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
        ? getGetV2MonitoringAlertsAlertUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2MonitoringAlertsAlertUuidKey() {
  return ['v2', '/v2/monitoring/alerts/:alert_uuid', 'PUT'] as const
}

export function usePutV2MonitoringAlertsAlertUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2MonitoringAlertsAlertUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']> },
      ) => parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2MonitoringAlertsAlertUuidKey() {
  return ['v2', '/v2/monitoring/alerts/:alert_uuid', 'DELETE'] as const
}

export function useDeleteV2MonitoringAlertsAlertUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2MonitoringAlertsAlertUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>
        },
      ) => parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2MonitoringMetricsDropletBandwidthKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/bandwidth', args] as const
}

export function useGetV2MonitoringMetricsDropletBandwidth<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>>
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
        ? getGetV2MonitoringMetricsDropletBandwidthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.bandwidth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MonitoringMetricsDropletBandwidth<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>>
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
        ? getGetV2MonitoringMetricsDropletBandwidthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.bandwidth.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2MonitoringMetricsDropletCpuKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/cpu', args] as const
}

export function useGetV2MonitoringMetricsDropletCpu<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>
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
        ? getGetV2MonitoringMetricsDropletCpuKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.monitoring.metrics.droplet.cpu.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MonitoringMetricsDropletCpu<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>
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
        ? getGetV2MonitoringMetricsDropletCpuKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.monitoring.metrics.droplet.cpu.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2MonitoringMetricsDropletFilesystemFreeKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/filesystem_free', args] as const
}

export function useGetV2MonitoringMetricsDropletFilesystemFree<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>>
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
        ? getGetV2MonitoringMetricsDropletFilesystemFreeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.monitoring.metrics.droplet.filesystem_free.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MonitoringMetricsDropletFilesystemFree<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>>
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
        ? getGetV2MonitoringMetricsDropletFilesystemFreeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.monitoring.metrics.droplet.filesystem_free.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2MonitoringMetricsDropletFilesystemSizeKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/filesystem_size', args] as const
}

export function useGetV2MonitoringMetricsDropletFilesystemSize<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>>
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
        ? getGetV2MonitoringMetricsDropletFilesystemSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.monitoring.metrics.droplet.filesystem_size.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MonitoringMetricsDropletFilesystemSize<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>>
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
        ? getGetV2MonitoringMetricsDropletFilesystemSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.monitoring.metrics.droplet.filesystem_size.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2MonitoringMetricsDropletLoad1Key(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/load_1', args] as const
}

export function useGetV2MonitoringMetricsDropletLoad1<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>
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
        ? getGetV2MonitoringMetricsDropletLoad1Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.load_1.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MonitoringMetricsDropletLoad1<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>
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
        ? getGetV2MonitoringMetricsDropletLoad1Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.load_1.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2MonitoringMetricsDropletLoad15Key(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/load_15', args] as const
}

export function useGetV2MonitoringMetricsDropletLoad15<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>>
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
        ? getGetV2MonitoringMetricsDropletLoad15Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.load_15.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MonitoringMetricsDropletLoad15<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>>
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
        ? getGetV2MonitoringMetricsDropletLoad15Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.load_15.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2MonitoringMetricsDropletLoad5Key(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/load_5', args] as const
}

export function useGetV2MonitoringMetricsDropletLoad5<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>
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
        ? getGetV2MonitoringMetricsDropletLoad5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.load_5.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MonitoringMetricsDropletLoad5<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>
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
        ? getGetV2MonitoringMetricsDropletLoad5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.load_5.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2MonitoringMetricsDropletMemoryAvailableKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/memory_available', args] as const
}

export function useGetV2MonitoringMetricsDropletMemoryAvailable<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>>
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
        ? getGetV2MonitoringMetricsDropletMemoryAvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.monitoring.metrics.droplet.memory_available.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MonitoringMetricsDropletMemoryAvailable<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>>
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
        ? getGetV2MonitoringMetricsDropletMemoryAvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.monitoring.metrics.droplet.memory_available.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2MonitoringMetricsDropletMemoryCachedKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/memory_cached', args] as const
}

export function useGetV2MonitoringMetricsDropletMemoryCached<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>>
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
        ? getGetV2MonitoringMetricsDropletMemoryCachedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.memory_cached.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MonitoringMetricsDropletMemoryCached<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>>
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
        ? getGetV2MonitoringMetricsDropletMemoryCachedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.memory_cached.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2MonitoringMetricsDropletMemoryFreeKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/memory_free', args] as const
}

export function useGetV2MonitoringMetricsDropletMemoryFree<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>>
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
        ? getGetV2MonitoringMetricsDropletMemoryFreeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.memory_free.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MonitoringMetricsDropletMemoryFree<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>>
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
        ? getGetV2MonitoringMetricsDropletMemoryFreeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.memory_free.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2MonitoringMetricsDropletMemoryTotalKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/memory_total', args] as const
}

export function useGetV2MonitoringMetricsDropletMemoryTotal<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>>
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
        ? getGetV2MonitoringMetricsDropletMemoryTotalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.memory_total.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MonitoringMetricsDropletMemoryTotal<TError = unknown>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>>
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
        ? getGetV2MonitoringMetricsDropletMemoryTotalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.monitoring.metrics.droplet.memory_total.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ProjectsKey(args: InferRequestType<typeof client.v2.projects.$get>) {
  return ['v2', '/v2/projects', args] as const
}

export function useGetV2Projects<TError = unknown>(
  args: InferRequestType<typeof client.v2.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Projects<TError = unknown>(
  args: InferRequestType<typeof client.v2.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ProjectsKey() {
  return ['v2', '/v2/projects', 'POST'] as const
}

export function usePostV2Projects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.projects.$post> }) =>
        parseResponse(client.v2.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsDefaultKey() {
  return ['v2', '/v2/projects/default'] as const
}

export function useGetV2ProjectsDefault<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ProjectsDefaultKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects.default.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsDefault<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ProjectsDefaultKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects.default.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2ProjectsDefaultKey() {
  return ['v2', '/v2/projects/default', 'PUT'] as const
}

export function usePutV2ProjectsDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.projects.default.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsDefaultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.projects.default.$put> }) =>
        parseResponse(client.v2.projects.default.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ProjectsDefaultKey() {
  return ['v2', '/v2/projects/default', 'PATCH'] as const
}

export function usePatchV2ProjectsDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.projects.default.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ProjectsDefaultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.projects.default.$patch> },
      ) => parseResponse(client.v2.projects.default.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsDefaultResourcesKey() {
  return ['v2', '/v2/projects/default/resources'] as const
}

export function useGetV2ProjectsDefaultResources<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.resources.$get>>>
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
        ? getGetV2ProjectsDefaultResourcesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.projects.default.resources.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects.default.resources.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsDefaultResources<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.resources.$get>>>
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
        ? getGetV2ProjectsDefaultResourcesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.projects.default.resources.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects.default.resources.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ProjectsDefaultResourcesKey() {
  return ['v2', '/v2/projects/default/resources', 'POST'] as const
}

export function usePostV2ProjectsDefaultResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.resources.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.projects.default.resources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProjectsDefaultResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.projects.default.resources.$post> },
      ) => parseResponse(client.v2.projects.default.resources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdKey(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>,
) {
  return ['v2', '/v2/projects/:project_id', args] as const
}

export function useGetV2ProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>
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
        ? getGetV2ProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>
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
        ? getGetV2ProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.projects[':project_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2ProjectsProjectIdKey() {
  return ['v2', '/v2/projects/:project_id', 'PUT'] as const
}

export function usePutV2ProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':project_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.projects)[':project_id']['$put']> },
      ) => parseResponse(client.v2.projects[':project_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ProjectsProjectIdKey() {
  return ['v2', '/v2/projects/:project_id', 'DELETE'] as const
}

export function useDeleteV2ProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':project_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.projects)[':project_id']['$delete']> },
      ) => parseResponse(client.v2.projects[':project_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ProjectsProjectIdKey() {
  return ['v2', '/v2/projects/:project_id', 'PATCH'] as const
}

export function usePatchV2ProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':project_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.projects)[':project_id']['$patch']> },
      ) => parseResponse(client.v2.projects[':project_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdResourcesKey(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$get']>,
) {
  return ['v2', '/v2/projects/:project_id/resources', args] as const
}

export function useGetV2ProjectsProjectIdResources<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$get']>>
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
        ? getGetV2ProjectsProjectIdResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects[':project_id'].resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectIdResources<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$get']>>
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
        ? getGetV2ProjectsProjectIdResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects[':project_id'].resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ProjectsProjectIdResourcesKey() {
  return ['v2', '/v2/projects/:project_id/resources', 'POST'] as const
}

export function usePostV2ProjectsProjectIdResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProjectsProjectIdResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$post']>
        },
      ) => parseResponse(client.v2.projects[':project_id'].resources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2RegionsKey(args: InferRequestType<typeof client.v2.regions.$get>) {
  return ['v2', '/v2/regions', args] as const
}

export function useGetV2Regions<TError = unknown>(
  args: InferRequestType<typeof client.v2.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.regions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2RegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.regions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Regions<TError = unknown>(
  args: InferRequestType<typeof client.v2.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.regions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2RegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.regions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2RegistryKey() {
  return ['v2', '/v2/registry'] as const
}

export function useGetV2Registry<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2RegistryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.registry.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Registry<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2RegistryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.registry.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2RegistryKey() {
  return ['v2', '/v2/registry', 'POST'] as const
}

export function usePostV2Registry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.registry.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2RegistryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.registry.$post> }) =>
        parseResponse(client.v2.registry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2RegistryKey() {
  return ['v2', '/v2/registry', 'DELETE'] as const
}

export function useDeleteV2Registry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2RegistryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v2.registry.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2RegistryDockerCredentialsKey(
  args: InferRequestType<(typeof client.v2.registry)['docker-credentials']['$get']>,
) {
  return ['v2', '/v2/registry/docker-credentials', args] as const
}

export function useGetV2RegistryDockerCredentials<TError = unknown>(
  args: InferRequestType<(typeof client.v2.registry)['docker-credentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.registry)['docker-credentials']['$get']>>
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
        ? getGetV2RegistryDockerCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.registry)['docker-credentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.registry['docker-credentials'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2RegistryDockerCredentials<TError = unknown>(
  args: InferRequestType<(typeof client.v2.registry)['docker-credentials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.registry)['docker-credentials']['$get']>>
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
        ? getGetV2RegistryDockerCredentialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.registry)['docker-credentials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.registry['docker-credentials'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2RegistryOptionsKey() {
  return ['v2', '/v2/registry/options'] as const
}

export function useGetV2RegistryOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.options.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2RegistryOptionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.options.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.registry.options.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2RegistryOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.options.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2RegistryOptionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.options.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.registry.options.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2RegistrySubscriptionKey() {
  return ['v2', '/v2/registry/subscription'] as const
}

export function useGetV2RegistrySubscription<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$get>>>
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
        ? getGetV2RegistrySubscriptionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.registry.subscription.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2RegistrySubscription<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$get>>>
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
        ? getGetV2RegistrySubscriptionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.registry.subscription.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2RegistrySubscriptionKey() {
  return ['v2', '/v2/registry/subscription', 'POST'] as const
}

export function usePostV2RegistrySubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.registry.subscription.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2RegistrySubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.registry.subscription.$post> },
      ) => parseResponse(client.v2.registry.subscription.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2RegistryValidateNameKey() {
  return ['v2', '/v2/registry/validate-name', 'POST'] as const
}

export function usePostV2RegistryValidateName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.registry)['validate-name']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.registry)['validate-name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2RegistryValidateNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.registry)['validate-name']['$post']> },
      ) => parseResponse(client.v2.registry['validate-name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2RegistryRegistryNameGarbageCollectionKey(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
  >,
) {
  return ['v2', '/v2/registry/:registry_name/garbage-collection', args] as const
}

export function useGetV2RegistryRegistryNameGarbageCollection<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
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
        ? getGetV2RegistryRegistryNameGarbageCollectionKey(args)
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
                (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
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
          client.v2.registry[':registry_name']['garbage-collection'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2RegistryRegistryNameGarbageCollection<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
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
        ? getGetV2RegistryRegistryNameGarbageCollectionKey(args)
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
                (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
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
          client.v2.registry[':registry_name']['garbage-collection'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2RegistryRegistryNameGarbageCollectionKey() {
  return ['v2', '/v2/registry/:registry_name/garbage-collection', 'POST'] as const
}

export function usePostV2RegistryRegistryNameGarbageCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2RegistryRegistryNameGarbageCollectionKey()
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
            (typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.registry[':registry_name']['garbage-collection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidKey() {
  return [
    'v2',
    '/v2/registry/:registry_name/garbage-collection/:garbage_collection_uuid',
    'PUT',
  ] as const
}

export function usePutV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidKey()
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
            (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.registry[':registry_name']['garbage-collection'][
            ':garbage_collection_uuid'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2RegistryRegistryNameGarbageCollectionsKey(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
  >,
) {
  return ['v2', '/v2/registry/:registry_name/garbage-collections', args] as const
}

export function useGetV2RegistryRegistryNameGarbageCollections<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
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
        ? getGetV2RegistryRegistryNameGarbageCollectionsKey(args)
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
                (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
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
          client.v2.registry[':registry_name']['garbage-collections'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2RegistryRegistryNameGarbageCollections<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
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
        ? getGetV2RegistryRegistryNameGarbageCollectionsKey(args)
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
                (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
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
          client.v2.registry[':registry_name']['garbage-collections'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2RegistryRegistryNameRepositoriesKey(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>,
) {
  return ['v2', '/v2/registry/:registry_name/repositories', args] as const
}

export function useGetV2RegistryRegistryNameRepositories<TError = unknown>(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>
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
        ? getGetV2RegistryRegistryNameRepositoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.registry[':registry_name'].repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2RegistryRegistryNameRepositories<TError = unknown>(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>
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
        ? getGetV2RegistryRegistryNameRepositoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.registry[':registry_name'].repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2RegistryRegistryNameRepositoriesV2Key(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>,
) {
  return ['v2', '/v2/registry/:registry_name/repositoriesV2', args] as const
}

export function useGetV2RegistryRegistryNameRepositoriesV2<TError = unknown>(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>
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
        ? getGetV2RegistryRegistryNameRepositoriesV2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.registry[':registry_name'].repositoriesV2.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2RegistryRegistryNameRepositoriesV2<TError = unknown>(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>
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
        ? getGetV2RegistryRegistryNameRepositoriesV2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.registry[':registry_name'].repositoriesV2.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2RegistryRegistryNameRepositoryNameDigestsKey(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
  >,
) {
  return ['v2', '/v2/registry/:registry_name/:repository_name/digests', args] as const
}

export function useGetV2RegistryRegistryNameRepositoryNameDigests<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
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
        ? getGetV2RegistryRegistryNameRepositoryNameDigestsKey(args)
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
                (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
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
          client.v2.registry[':registry_name'][':repository_name'].digests.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2RegistryRegistryNameRepositoryNameDigests<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
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
        ? getGetV2RegistryRegistryNameRepositoryNameDigestsKey(args)
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
                (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
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
          client.v2.registry[':registry_name'][':repository_name'].digests.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestKey() {
  return [
    'v2',
    '/v2/registry/:registry_name/:repository_name/digests/:manifest_digest',
    'DELETE',
  ] as const
}

export function useDeleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestKey()
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
            (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.registry[':registry_name'][':repository_name'].digests[
            ':manifest_digest'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2RegistryRegistryNameRepositoryNameTagsKey(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
  >,
) {
  return ['v2', '/v2/registry/:registry_name/:repository_name/tags', args] as const
}

export function useGetV2RegistryRegistryNameRepositoryNameTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
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
        ? getGetV2RegistryRegistryNameRepositoryNameTagsKey(args)
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
                (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
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
          client.v2.registry[':registry_name'][':repository_name'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2RegistryRegistryNameRepositoryNameTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
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
        ? getGetV2RegistryRegistryNameRepositoryNameTagsKey(args)
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
                (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
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
          client.v2.registry[':registry_name'][':repository_name'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagKey() {
  return [
    'v2',
    '/v2/registry/:registry_name/:repository_name/tags/:repository_tag',
    'DELETE',
  ] as const
}

export function useDeleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTag<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagKey()
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
            (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.registry[':registry_name'][':repository_name'].tags[':repository_tag'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ReportsDropletNeighborsIdsKey() {
  return ['v2', '/v2/reports/droplet_neighbors_ids'] as const
}

export function useGetV2ReportsDropletNeighborsIds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.reports.droplet_neighbors_ids.$get>>
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
        ? getGetV2ReportsDropletNeighborsIdsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.reports.droplet_neighbors_ids.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.reports.droplet_neighbors_ids.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ReportsDropletNeighborsIds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.reports.droplet_neighbors_ids.$get>>
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
        ? getGetV2ReportsDropletNeighborsIdsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.reports.droplet_neighbors_ids.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.reports.droplet_neighbors_ids.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ReservedIpsKey(args: InferRequestType<typeof client.v2.reserved_ips.$get>) {
  return ['v2', '/v2/reserved_ips', args] as const
}

export function useGetV2ReservedIps<TError = unknown>(
  args: InferRequestType<typeof client.v2.reserved_ips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ReservedIpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.reserved_ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ReservedIps<TError = unknown>(
  args: InferRequestType<typeof client.v2.reserved_ips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ReservedIpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.reserved_ips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ReservedIpsKey() {
  return ['v2', '/v2/reserved_ips', 'POST'] as const
}

export function usePostV2ReservedIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.reserved_ips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ReservedIpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.reserved_ips.$post> }) =>
        parseResponse(client.v2.reserved_ips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ReservedIpsReservedIpKey(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>,
) {
  return ['v2', '/v2/reserved_ips/:reserved_ip', args] as const
}

export function useGetV2ReservedIpsReservedIp<TError = unknown>(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>
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
        ? getGetV2ReservedIpsReservedIpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.reserved_ips[':reserved_ip'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ReservedIpsReservedIp<TError = unknown>(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>
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
        ? getGetV2ReservedIpsReservedIpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.reserved_ips[':reserved_ip'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ReservedIpsReservedIpKey() {
  return ['v2', '/v2/reserved_ips/:reserved_ip', 'DELETE'] as const
}

export function useDeleteV2ReservedIpsReservedIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ReservedIpsReservedIpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']> },
      ) => parseResponse(client.v2.reserved_ips[':reserved_ip'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ReservedIpsReservedIpActionsKey(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>,
) {
  return ['v2', '/v2/reserved_ips/:reserved_ip/actions', args] as const
}

export function useGetV2ReservedIpsReservedIpActions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>>
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
        ? getGetV2ReservedIpsReservedIpActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.reserved_ips[':reserved_ip'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ReservedIpsReservedIpActions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>>
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
        ? getGetV2ReservedIpsReservedIpActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.reserved_ips[':reserved_ip'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ReservedIpsReservedIpActionsKey() {
  return ['v2', '/v2/reserved_ips/:reserved_ip/actions', 'POST'] as const
}

export function usePostV2ReservedIpsReservedIpActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ReservedIpsReservedIpActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>
        },
      ) => parseResponse(client.v2.reserved_ips[':reserved_ip'].actions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ReservedIpsReservedIpActionsActionIdKey(
  args: InferRequestType<
    (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
  >,
) {
  return ['v2', '/v2/reserved_ips/:reserved_ip/actions/:action_id', args] as const
}

export function useGetV2ReservedIpsReservedIpActionsActionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
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
        ? getGetV2ReservedIpsReservedIpActionsActionIdKey(args)
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
                (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
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
          client.v2.reserved_ips[':reserved_ip'].actions[':action_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ReservedIpsReservedIpActionsActionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
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
        ? getGetV2ReservedIpsReservedIpActionsActionIdKey(args)
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
                (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
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
          client.v2.reserved_ips[':reserved_ip'].actions[':action_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2SizesKey(args: InferRequestType<typeof client.v2.sizes.$get>) {
  return ['v2', '/v2/sizes', args] as const
}

export function useGetV2Sizes<TError = unknown>(
  args: InferRequestType<typeof client.v2.sizes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sizes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SizesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sizes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.sizes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Sizes<TError = unknown>(
  args: InferRequestType<typeof client.v2.sizes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sizes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SizesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sizes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.sizes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV2SnapshotsKey(args: InferRequestType<typeof client.v2.snapshots.$get>) {
  return ['v2', '/v2/snapshots', args] as const
}

export function useGetV2Snapshots<TError = unknown>(
  args: InferRequestType<typeof client.v2.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.snapshots.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SnapshotsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.snapshots.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Snapshots<TError = unknown>(
  args: InferRequestType<typeof client.v2.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.snapshots.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SnapshotsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.snapshots.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SnapshotsSnapshotIdKey(
  args: InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>,
) {
  return ['v2', '/v2/snapshots/:snapshot_id', args] as const
}

export function useGetV2SnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>
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
        ? getGetV2SnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.snapshots[':snapshot_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>
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
        ? getGetV2SnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.snapshots[':snapshot_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2SnapshotsSnapshotIdKey() {
  return ['v2', '/v2/snapshots/:snapshot_id', 'DELETE'] as const
}

export function useDeleteV2SnapshotsSnapshotId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SnapshotsSnapshotIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']> },
      ) => parseResponse(client.v2.snapshots[':snapshot_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TagsKey(args: InferRequestType<typeof client.v2.tags.$get>) {
  return ['v2', '/v2/tags', args] as const
}

export function useGetV2Tags<TError = unknown>(
  args: InferRequestType<typeof client.v2.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Tags<TError = unknown>(
  args: InferRequestType<typeof client.v2.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV2TagsKey() {
  return ['v2', '/v2/tags', 'POST'] as const
}

export function usePostV2Tags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.tags.$post> }) =>
        parseResponse(client.v2.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TagsTagIdKey(
  args: InferRequestType<(typeof client.v2.tags)[':tag_id']['$get']>,
) {
  return ['v2', '/v2/tags/:tag_id', args] as const
}

export function useGetV2TagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.tags)[':tag_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2TagsTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.tags[':tag_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.tags)[':tag_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2TagsTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.tags[':tag_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2TagsTagIdKey() {
  return ['v2', '/v2/tags/:tag_id', 'DELETE'] as const
}

export function useDeleteV2TagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.tags)[':tag_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2TagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.tags)[':tag_id']['$delete']> },
      ) => parseResponse(client.v2.tags[':tag_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2TagsTagIdResourcesKey() {
  return ['v2', '/v2/tags/:tag_id/resources', 'POST'] as const
}

export function usePostV2TagsTagIdResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TagsTagIdResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$post']> },
      ) => parseResponse(client.v2.tags[':tag_id'].resources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2TagsTagIdResourcesKey() {
  return ['v2', '/v2/tags/:tag_id/resources', 'DELETE'] as const
}

export function useDeleteV2TagsTagIdResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2TagsTagIdResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']> },
      ) => parseResponse(client.v2.tags[':tag_id'].resources.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UptimeChecksKey(
  args: InferRequestType<typeof client.v2.uptime.checks.$get>,
) {
  return ['v2', '/v2/uptime/checks', args] as const
}

export function useGetV2UptimeChecks<TError = unknown>(
  args: InferRequestType<typeof client.v2.uptime.checks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UptimeChecksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.uptime.checks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UptimeChecks<TError = unknown>(
  args: InferRequestType<typeof client.v2.uptime.checks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UptimeChecksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.uptime.checks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UptimeChecksKey() {
  return ['v2', '/v2/uptime/checks', 'POST'] as const
}

export function usePostV2UptimeChecks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.uptime.checks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UptimeChecksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.uptime.checks.$post> }) =>
        parseResponse(client.v2.uptime.checks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UptimeChecksCheckIdKey(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$get']>,
) {
  return ['v2', '/v2/uptime/checks/:check_id', args] as const
}

export function useGetV2UptimeChecksCheckId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>
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
        ? getGetV2UptimeChecksCheckIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.uptime.checks[':check_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UptimeChecksCheckId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>
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
        ? getGetV2UptimeChecksCheckIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.uptime.checks[':check_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2UptimeChecksCheckIdKey() {
  return ['v2', '/v2/uptime/checks/:check_id', 'PUT'] as const
}

export function usePutV2UptimeChecksCheckId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UptimeChecksCheckIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$put']> },
      ) => parseResponse(client.v2.uptime.checks[':check_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2UptimeChecksCheckIdKey() {
  return ['v2', '/v2/uptime/checks/:check_id', 'DELETE'] as const
}

export function useDeleteV2UptimeChecksCheckId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2UptimeChecksCheckIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$delete']> },
      ) => parseResponse(client.v2.uptime.checks[':check_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UptimeChecksCheckIdAlertsKey(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>,
) {
  return ['v2', '/v2/uptime/checks/:check_id/alerts', args] as const
}

export function useGetV2UptimeChecksCheckIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>>
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
        ? getGetV2UptimeChecksCheckIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.uptime.checks[':check_id'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UptimeChecksCheckIdAlerts<TError = unknown>(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>>
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
        ? getGetV2UptimeChecksCheckIdAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.uptime.checks[':check_id'].alerts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UptimeChecksCheckIdAlertsKey() {
  return ['v2', '/v2/uptime/checks/:check_id/alerts', 'POST'] as const
}

export function usePostV2UptimeChecksCheckIdAlerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UptimeChecksCheckIdAlertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>
        },
      ) => parseResponse(client.v2.uptime.checks[':check_id'].alerts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UptimeChecksCheckIdAlertsAlertIdKey(
  args: InferRequestType<
    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
  >,
) {
  return ['v2', '/v2/uptime/checks/:check_id/alerts/:alert_id', args] as const
}

export function useGetV2UptimeChecksCheckIdAlertsAlertId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
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
        ? getGetV2UptimeChecksCheckIdAlertsAlertIdKey(args)
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
                (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
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
          client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UptimeChecksCheckIdAlertsAlertId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
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
        ? getGetV2UptimeChecksCheckIdAlertsAlertIdKey(args)
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
                (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
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
          client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2UptimeChecksCheckIdAlertsAlertIdKey() {
  return ['v2', '/v2/uptime/checks/:check_id/alerts/:alert_id', 'PUT'] as const
}

export function usePutV2UptimeChecksCheckIdAlertsAlertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2UptimeChecksCheckIdAlertsAlertIdKey()
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
            (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2UptimeChecksCheckIdAlertsAlertIdKey() {
  return ['v2', '/v2/uptime/checks/:check_id/alerts/:alert_id', 'DELETE'] as const
}

export function useDeleteV2UptimeChecksCheckIdAlertsAlertId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2UptimeChecksCheckIdAlertsAlertIdKey()
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
            (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UptimeChecksCheckIdStateKey(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>,
) {
  return ['v2', '/v2/uptime/checks/:check_id/state', args] as const
}

export function useGetV2UptimeChecksCheckIdState<TError = unknown>(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>>
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
        ? getGetV2UptimeChecksCheckIdStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.uptime.checks[':check_id'].state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UptimeChecksCheckIdState<TError = unknown>(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>>
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
        ? getGetV2UptimeChecksCheckIdStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.uptime.checks[':check_id'].state.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VolumesKey(args: InferRequestType<typeof client.v2.volumes.$get>) {
  return ['v2', '/v2/volumes', args] as const
}

export function useGetV2Volumes<TError = unknown>(
  args: InferRequestType<typeof client.v2.volumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2VolumesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Volumes<TError = unknown>(
  args: InferRequestType<typeof client.v2.volumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2VolumesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.volumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VolumesKey() {
  return ['v2', '/v2/volumes', 'POST'] as const
}

export function usePostV2Volumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.volumes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.volumes.$post> }) =>
        parseResponse(client.v2.volumes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2VolumesKey() {
  return ['v2', '/v2/volumes', 'DELETE'] as const
}

export function useDeleteV2Volumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.volumes.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2VolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.volumes.$delete> }) =>
        parseResponse(client.v2.volumes.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2VolumesActionsKey() {
  return ['v2', '/v2/volumes/actions', 'POST'] as const
}

export function usePostV2VolumesActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.actions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.volumes.actions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VolumesActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.volumes.actions.$post> }) =>
        parseResponse(client.v2.volumes.actions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VolumesSnapshotsSnapshotIdKey(
  args: InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>,
) {
  return ['v2', '/v2/volumes/snapshots/:snapshot_id', args] as const
}

export function useGetV2VolumesSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>>
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
        ? getGetV2VolumesSnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.volumes.snapshots[':snapshot_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VolumesSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>>
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
        ? getGetV2VolumesSnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.volumes.snapshots[':snapshot_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2VolumesSnapshotsSnapshotIdKey() {
  return ['v2', '/v2/volumes/snapshots/:snapshot_id', 'DELETE'] as const
}

export function useDeleteV2VolumesSnapshotsSnapshotId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2VolumesSnapshotsSnapshotIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>
        },
      ) => parseResponse(client.v2.volumes.snapshots[':snapshot_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VolumesVolumeIdKey(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['$get']>,
) {
  return ['v2', '/v2/volumes/:volume_id', args] as const
}

export function useGetV2VolumesVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$get']>>
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
        ? getGetV2VolumesVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.volumes[':volume_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VolumesVolumeId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$get']>>
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
        ? getGetV2VolumesVolumeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.volumes[':volume_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2VolumesVolumeIdKey() {
  return ['v2', '/v2/volumes/:volume_id', 'DELETE'] as const
}

export function useDeleteV2VolumesVolumeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2VolumesVolumeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.volumes)[':volume_id']['$delete']> },
      ) => parseResponse(client.v2.volumes[':volume_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VolumesVolumeIdActionsKey(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>,
) {
  return ['v2', '/v2/volumes/:volume_id/actions', args] as const
}

export function useGetV2VolumesVolumeIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>>
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
        ? getGetV2VolumesVolumeIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.volumes[':volume_id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VolumesVolumeIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>>
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
        ? getGetV2VolumesVolumeIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.volumes[':volume_id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VolumesVolumeIdActionsKey() {
  return ['v2', '/v2/volumes/:volume_id/actions', 'POST'] as const
}

export function usePostV2VolumesVolumeIdActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VolumesVolumeIdActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']> },
      ) => parseResponse(client.v2.volumes[':volume_id'].actions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VolumesVolumeIdActionsActionIdKey(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>,
) {
  return ['v2', '/v2/volumes/:volume_id/actions/:action_id', args] as const
}

export function useGetV2VolumesVolumeIdActionsActionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>
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
        ? getGetV2VolumesVolumeIdActionsActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.volumes[':volume_id'].actions[':action_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VolumesVolumeIdActionsActionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>
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
        ? getGetV2VolumesVolumeIdActionsActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.volumes[':volume_id'].actions[':action_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2VolumesVolumeIdSnapshotsKey(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>,
) {
  return ['v2', '/v2/volumes/:volume_id/snapshots', args] as const
}

export function useGetV2VolumesVolumeIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>>
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
        ? getGetV2VolumesVolumeIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.volumes[':volume_id'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VolumesVolumeIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>>
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
        ? getGetV2VolumesVolumeIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.volumes[':volume_id'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VolumesVolumeIdSnapshotsKey() {
  return ['v2', '/v2/volumes/:volume_id/snapshots', 'POST'] as const
}

export function usePostV2VolumesVolumeIdSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VolumesVolumeIdSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>
        },
      ) => parseResponse(client.v2.volumes[':volume_id'].snapshots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VpcsKey(args: InferRequestType<typeof client.v2.vpcs.$get>) {
  return ['v2', '/v2/vpcs', args] as const
}

export function useGetV2Vpcs<TError = unknown>(
  args: InferRequestType<typeof client.v2.vpcs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2VpcsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.vpcs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Vpcs<TError = unknown>(
  args: InferRequestType<typeof client.v2.vpcs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2VpcsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.vpcs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV2VpcsKey() {
  return ['v2', '/v2/vpcs', 'POST'] as const
}

export function usePostV2Vpcs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.vpcs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VpcsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.vpcs.$post> }) =>
        parseResponse(client.v2.vpcs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VpcsVpcIdKey(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$get']>,
) {
  return ['v2', '/v2/vpcs/:vpc_id', args] as const
}

export function useGetV2VpcsVpcId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2VpcsVpcIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vpcs[':vpc_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VpcsVpcId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2VpcsVpcIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vpcs[':vpc_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2VpcsVpcIdKey() {
  return ['v2', '/v2/vpcs/:vpc_id', 'PUT'] as const
}

export function usePutV2VpcsVpcId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2VpcsVpcIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$put']> },
      ) => parseResponse(client.v2.vpcs[':vpc_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2VpcsVpcIdKey() {
  return ['v2', '/v2/vpcs/:vpc_id', 'DELETE'] as const
}

export function useDeleteV2VpcsVpcId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2VpcsVpcIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$delete']> },
      ) => parseResponse(client.v2.vpcs[':vpc_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2VpcsVpcIdKey() {
  return ['v2', '/v2/vpcs/:vpc_id', 'PATCH'] as const
}

export function usePatchV2VpcsVpcId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2VpcsVpcIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$patch']> },
      ) => parseResponse(client.v2.vpcs[':vpc_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VpcsVpcIdMembersKey(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>,
) {
  return ['v2', '/v2/vpcs/:vpc_id/members', args] as const
}

export function useGetV2VpcsVpcIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>
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
        ? getGetV2VpcsVpcIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vpcs[':vpc_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VpcsVpcIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>
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
        ? getGetV2VpcsVpcIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vpcs[':vpc_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
