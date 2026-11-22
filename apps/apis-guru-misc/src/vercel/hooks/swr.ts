import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEdgeConfigKey() {
  return ['edge-config'] as const
}

export function getRegistrationKey() {
  return ['registration'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getV10Key() {
  return ['v10'] as const
}

export function getV11Key() {
  return ['v11'] as const
}

export function getV12Key() {
  return ['v12'] as const
}

export function getV13Key() {
  return ['v13'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV4Key() {
  return ['v4'] as const
}

export function getV5Key() {
  return ['v5'] as const
}

export function getV6Key() {
  return ['v6'] as const
}

export function getV7Key() {
  return ['v7'] as const
}

export function getV8Key() {
  return ['v8'] as const
}

export function getV9Key() {
  return ['v9'] as const
}

export function getGetEdgeConfigKey(
  args: InferRequestType<(typeof client)['edge-config']['$get']>,
) {
  return ['edge-config', '/edge-config', args] as const
}

export function useGetEdgeConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['edge-config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['edge-config'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['edge-config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEdgeConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['edge-config'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEdgeConfigKey() {
  return ['edge-config', '/edge-config', 'POST'] as const
}

export function usePostEdgeConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['edge-config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEdgeConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['edge-config']['$post']> }) =>
        parseResponse(client['edge-config'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEdgeConfigEdgeConfigIdKey(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$get']>,
) {
  return ['edge-config', '/edge-config/:edgeConfigId', args] as const
}

export function useGetEdgeConfigEdgeConfigId<TError = unknown>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEdgeConfigEdgeConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['edge-config'][':edgeConfigId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeConfigEdgeConfigId<TError = unknown>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEdgeConfigEdgeConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['edge-config'][':edgeConfigId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEdgeConfigEdgeConfigIdKey() {
  return ['edge-config', '/edge-config/:edgeConfigId', 'PUT'] as const
}

export function usePutEdgeConfigEdgeConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEdgeConfigEdgeConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$put']> },
      ) => parseResponse(client['edge-config'][':edgeConfigId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEdgeConfigEdgeConfigIdKey() {
  return ['edge-config', '/edge-config/:edgeConfigId', 'DELETE'] as const
}

export function useDeleteEdgeConfigEdgeConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEdgeConfigEdgeConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$delete']> },
      ) => parseResponse(client['edge-config'][':edgeConfigId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyKey(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
  >,
) {
  return ['edge-config', '/edge-config/:edgeConfigId/item/:edgeConfigItemKey', args] as const
}

export function useGetEdgeConfigEdgeConfigIdItemEdgeConfigItemKey<TError = unknown>(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
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
        ? getGetEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyKey(args)
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
                (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
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
          client['edge-config'][':edgeConfigId'].item[':edgeConfigItemKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeConfigEdgeConfigIdItemEdgeConfigItemKey<TError = unknown>(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
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
        ? getGetEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyKey(args)
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
                (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
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
          client['edge-config'][':edgeConfigId'].item[':edgeConfigItemKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEdgeConfigEdgeConfigIdItemsKey(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>,
) {
  return ['edge-config', '/edge-config/:edgeConfigId/items', args] as const
}

export function useGetEdgeConfigEdgeConfigIdItems<TError = unknown>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEdgeConfigEdgeConfigIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['edge-config'][':edgeConfigId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeConfigEdgeConfigIdItems<TError = unknown>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEdgeConfigEdgeConfigIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['edge-config'][':edgeConfigId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchEdgeConfigEdgeConfigIdItemsKey() {
  return ['edge-config', '/edge-config/:edgeConfigId/items', 'PATCH'] as const
}

export function usePatchEdgeConfigEdgeConfigIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEdgeConfigEdgeConfigIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$patch']>
        },
      ) => parseResponse(client['edge-config'][':edgeConfigId'].items.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEdgeConfigEdgeConfigIdTokenKey() {
  return ['edge-config', '/edge-config/:edgeConfigId/token', 'POST'] as const
}

export function usePostEdgeConfigEdgeConfigIdToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEdgeConfigEdgeConfigIdTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['token']['$post']>
        },
      ) => parseResponse(client['edge-config'][':edgeConfigId'].token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEdgeConfigEdgeConfigIdTokenTokenKey(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']
  >,
) {
  return ['edge-config', '/edge-config/:edgeConfigId/token/:token', args] as const
}

export function useGetEdgeConfigEdgeConfigIdTokenToken<TError = unknown>(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']>
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
        ? getGetEdgeConfigEdgeConfigIdTokenTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['edge-config'][':edgeConfigId'].token[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeConfigEdgeConfigIdTokenToken<TError = unknown>(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']>
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
        ? getGetEdgeConfigEdgeConfigIdTokenTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['edge-config'][':edgeConfigId'].token[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEdgeConfigEdgeConfigIdTokensKey(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>,
) {
  return ['edge-config', '/edge-config/:edgeConfigId/tokens', args] as const
}

export function useGetEdgeConfigEdgeConfigIdTokens<TError = unknown>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEdgeConfigEdgeConfigIdTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['edge-config'][':edgeConfigId'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEdgeConfigEdgeConfigIdTokens<TError = unknown>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEdgeConfigEdgeConfigIdTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['edge-config'][':edgeConfigId'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEdgeConfigEdgeConfigIdTokensKey() {
  return ['edge-config', '/edge-config/:edgeConfigId/tokens', 'DELETE'] as const
}

export function useDeleteEdgeConfigEdgeConfigIdTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEdgeConfigEdgeConfigIdTokensKey()
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
            (typeof client)['edge-config'][':edgeConfigId']['tokens']['$delete']
          >
        },
      ) => parseResponse(client['edge-config'][':edgeConfigId'].tokens.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegistrationKey() {
  return ['registration', '/registration', 'POST'] as const
}

export function usePostRegistration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.registration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegistrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.registration.$post> }) =>
        parseResponse(client.registration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRegistrationVerifyKey(
  args: InferRequestType<typeof client.registration.verify.$get>,
) {
  return ['registration', '/registration/verify', args] as const
}

export function useGetRegistrationVerify<TError = unknown>(
  args: InferRequestType<typeof client.registration.verify.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegistrationVerifyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registration.verify.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistrationVerify<TError = unknown>(
  args: InferRequestType<typeof client.registration.verify.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRegistrationVerifyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registration.verify.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DeploymentsDeploymentIdChecksKey(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>,
) {
  return ['v1', '/v1/deployments/:deploymentId/checks', args] as const
}

export function useGetV1DeploymentsDeploymentIdChecks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DeploymentsDeploymentIdChecksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.deployments[':deploymentId'].checks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DeploymentsDeploymentIdChecks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DeploymentsDeploymentIdChecksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.deployments[':deploymentId'].checks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DeploymentsDeploymentIdChecksKey() {
  return ['v1', '/v1/deployments/:deploymentId/checks', 'POST'] as const
}

export function usePostV1DeploymentsDeploymentIdChecks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeploymentsDeploymentIdChecksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$post']>
        },
      ) => parseResponse(client.v1.deployments[':deploymentId'].checks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DeploymentsDeploymentIdChecksCheckIdKey(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
  >,
) {
  return ['v1', '/v1/deployments/:deploymentId/checks/:checkId', args] as const
}

export function useGetV1DeploymentsDeploymentIdChecksCheckId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
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
        ? getGetV1DeploymentsDeploymentIdChecksCheckIdKey(args)
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
                (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
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
          client.v1.deployments[':deploymentId'].checks[':checkId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DeploymentsDeploymentIdChecksCheckId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
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
        ? getGetV1DeploymentsDeploymentIdChecksCheckIdKey(args)
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
                (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
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
          client.v1.deployments[':deploymentId'].checks[':checkId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1DeploymentsDeploymentIdChecksCheckIdKey() {
  return ['v1', '/v1/deployments/:deploymentId/checks/:checkId', 'PATCH'] as const
}

export function usePatchV1DeploymentsDeploymentIdChecksCheckId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DeploymentsDeploymentIdChecksCheckIdKey()
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
            (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.deployments[':deploymentId'].checks[':checkId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DeploymentsDeploymentIdChecksCheckIdRerequestKey() {
  return ['v1', '/v1/deployments/:deploymentId/checks/:checkId/rerequest', 'POST'] as const
}

export function usePostV1DeploymentsDeploymentIdChecksCheckIdRerequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['rerequest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['rerequest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeploymentsDeploymentIdChecksCheckIdRerequestKey()
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
            (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['rerequest']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.deployments[':deploymentId'].checks[':checkId'].rerequest.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DomainsRecordsRecordIdKey() {
  return ['v1', '/v1/domains/records/:recordId', 'PATCH'] as const
}

export function usePatchV1DomainsRecordsRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains.records)[':recordId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains.records)[':recordId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DomainsRecordsRecordIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.domains.records)[':recordId']['$patch']> },
      ) => parseResponse(client.v1.domains.records[':recordId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IntegrationsConfigurationIdKey(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>,
) {
  return ['v1', '/v1/integrations/configuration/:id', args] as const
}

export function useGetV1IntegrationsConfigurationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IntegrationsConfigurationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.integrations.configuration[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IntegrationsConfigurationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IntegrationsConfigurationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.integrations.configuration[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1IntegrationsConfigurationIdKey() {
  return ['v1', '/v1/integrations/configuration/:id', 'DELETE'] as const
}

export function useDeleteV1IntegrationsConfigurationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1IntegrationsConfigurationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$delete']>
        },
      ) => parseResponse(client.v1.integrations.configuration[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IntegrationsConfigurationsKey(
  args: InferRequestType<typeof client.v1.integrations.configurations.$get>,
) {
  return ['v1', '/v1/integrations/configurations', args] as const
}

export function useGetV1IntegrationsConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.v1.integrations.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IntegrationsConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IntegrationsConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.v1.integrations.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IntegrationsConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IntegrationsGitNamespacesKey(
  args: InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>,
) {
  return ['v1', '/v1/integrations/git-namespaces', args] as const
}

export function useGetV1IntegrationsGitNamespaces<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IntegrationsGitNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations['git-namespaces'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IntegrationsGitNamespaces<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IntegrationsGitNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations['git-namespaces'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1IntegrationsLogDrainsIdKey() {
  return ['v1', '/v1/integrations/log-drains/:id', 'DELETE'] as const
}

export function useDeleteV1IntegrationsLogDrainsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1IntegrationsLogDrainsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>
        },
      ) => parseResponse(client.v1.integrations['log-drains'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IntegrationsSearchRepoKey(
  args: InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>,
) {
  return ['v1', '/v1/integrations/search-repo', args] as const
}

export function useGetV1IntegrationsSearchRepo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IntegrationsSearchRepoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations['search-repo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IntegrationsSearchRepo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IntegrationsSearchRepoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations['search-repo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LogDrainsKey(
  args: InferRequestType<(typeof client.v1)['log-drains']['$get']>,
) {
  return ['v1', '/v1/log-drains', args] as const
}

export function useGetV1LogDrains<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['log-drains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LogDrainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['log-drains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LogDrains<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['log-drains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LogDrainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['log-drains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1LogDrainsKey() {
  return ['v1', '/v1/log-drains', 'POST'] as const
}

export function usePostV1LogDrains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['log-drains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LogDrainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['log-drains']['$post']> },
      ) => parseResponse(client.v1['log-drains'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LogDrainsIdKey(
  args: InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>,
) {
  return ['v1', '/v1/log-drains/:id', args] as const
}

export function useGetV1LogDrainsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LogDrainsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['log-drains'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LogDrainsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1LogDrainsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['log-drains'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1LogDrainsIdKey() {
  return ['v1', '/v1/log-drains/:id', 'DELETE'] as const
}

export function useDeleteV1LogDrainsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['log-drains'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1LogDrainsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['log-drains'][':id']['$delete']> },
      ) => parseResponse(client.v1['log-drains'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsIdOrNameEnvIdKey(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>,
) {
  return ['v1', '/v1/projects/:idOrName/env/:id', args] as const
}

export function useGetV1ProjectsIdOrNameEnvId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsIdOrNameEnvIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':idOrName'].env[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsIdOrNameEnvId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProjectsIdOrNameEnvIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':idOrName'].env[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TeamsKey() {
  return ['v1', '/v1/teams', 'POST'] as const
}

export function usePostV1Teams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.teams.$post> }) =>
        parseResponse(client.v1.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TeamsTeamIdKey() {
  return ['v1', '/v1/teams/:teamId', 'DELETE'] as const
}

export function useDeleteV1TeamsTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TeamsTeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.teams)[':teamId']['$delete']> },
      ) => parseResponse(client.v1.teams[':teamId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TeamsTeamIdInvitesInviteIdKey() {
  return ['v1', '/v1/teams/:teamId/invites/:inviteId', 'DELETE'] as const
}

export function useDeleteV1TeamsTeamIdInvitesInviteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.teams)[':teamId']['invites'][':inviteId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['invites'][':inviteId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TeamsTeamIdInvitesInviteIdKey()
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
            (typeof client.v1.teams)[':teamId']['invites'][':inviteId']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.teams[':teamId'].invites[':inviteId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TeamsTeamIdMembersKey() {
  return ['v1', '/v1/teams/:teamId/members', 'POST'] as const
}

export function usePostV1TeamsTeamIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamsTeamIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.teams)[':teamId']['members']['$post']> },
      ) => parseResponse(client.v1.teams[':teamId'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TeamsTeamIdMembersTeamsJoinKey() {
  return ['v1', '/v1/teams/:teamId/members/teams/join', 'POST'] as const
}

export function usePostV1TeamsTeamIdMembersTeamsJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamsTeamIdMembersTeamsJoinKey()
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
            (typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']
          >
        },
      ) => parseResponse(client.v1.teams[':teamId'].members.teams.join.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TeamsTeamIdMembersUidKey() {
  return ['v1', '/v1/teams/:teamId/members/:uid', 'DELETE'] as const
}

export function useDeleteV1TeamsTeamIdMembersUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TeamsTeamIdMembersUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>
        },
      ) => parseResponse(client.v1.teams[':teamId'].members[':uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1TeamsTeamIdMembersUidKey() {
  return ['v1', '/v1/teams/:teamId/members/:uid', 'PATCH'] as const
}

export function usePatchV1TeamsTeamIdMembersUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1TeamsTeamIdMembersUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>
        },
      ) => parseResponse(client.v1.teams[':teamId'].members[':uid'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TeamsTeamIdRequestKey() {
  return ['v1', '/v1/teams/:teamId/request', 'POST'] as const
}

export function usePostV1TeamsTeamIdRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamsTeamIdRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.teams)[':teamId']['request']['$post']> },
      ) => parseResponse(client.v1.teams[':teamId'].request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TeamsTeamIdRequestUserIdKey(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>,
) {
  return ['v1', '/v1/teams/:teamId/request/:userId', args] as const
}

export function useGetV1TeamsTeamIdRequestUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TeamsTeamIdRequestUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.teams[':teamId'].request[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TeamsTeamIdRequestUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TeamsTeamIdRequestUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.teams[':teamId'].request[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1UserKey() {
  return ['v1', '/v1/user', 'DELETE'] as const
}

export function useDeleteV1User<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.user.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.user.$delete> }) =>
        parseResponse(client.v1.user.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebhooksKey(args: InferRequestType<typeof client.v1.webhooks.$get>) {
  return ['v1', '/v1/webhooks', args] as const
}

export function useGetV1Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WebhooksKey() {
  return ['v1', '/v1/webhooks', 'POST'] as const
}

export function usePostV1Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.webhooks.$post> }) =>
        parseResponse(client.v1.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebhooksIdKey(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
) {
  return ['v1', '/v1/webhooks/:id', args] as const
}

export function useGetV1WebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1WebhooksIdKey() {
  return ['v1', '/v1/webhooks/:id', 'DELETE'] as const
}

export function useDeleteV1WebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1WebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']> },
      ) => parseResponse(client.v1.webhooks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV10ProjectsIdOrNameEnvKey() {
  return ['v10', '/v10/projects/:idOrName/env', 'POST'] as const
}

export function usePostV10ProjectsIdOrNameEnv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v10.projects)[':idOrName']['env']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v10.projects)[':idOrName']['env']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV10ProjectsIdOrNameEnvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v10.projects)[':idOrName']['env']['$post']> },
      ) => parseResponse(client.v10.projects[':idOrName'].env.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV11DeploymentsDeploymentIdBuildsKey(
  args: InferRequestType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>,
) {
  return ['v11', '/v11/deployments/:deploymentId/builds', args] as const
}

export function useGetV11DeploymentsDeploymentIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV11DeploymentsDeploymentIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v11.deployments[':deploymentId'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV11DeploymentsDeploymentIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV11DeploymentsDeploymentIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v11.deployments[':deploymentId'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV12DeploymentsIdCancelKey() {
  return ['v12', '/v12/deployments/:id/cancel', 'PATCH'] as const
}

export function usePatchV12DeploymentsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v12.deployments)[':id']['cancel']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v12.deployments)[':id']['cancel']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV12DeploymentsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v12.deployments)[':id']['cancel']['$patch']> },
      ) => parseResponse(client.v12.deployments[':id'].cancel.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV13DeploymentsKey() {
  return ['v13', '/v13/deployments', 'POST'] as const
}

export function usePostV13Deployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v13.deployments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v13.deployments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV13DeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v13.deployments.$post> }) =>
        parseResponse(client.v13.deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV13DeploymentsIdOrUrlKey(
  args: InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>,
) {
  return ['v13', '/v13/deployments/:idOrUrl', args] as const
}

export function useGetV13DeploymentsIdOrUrl<TError = unknown>(
  args: InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV13DeploymentsIdOrUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v13.deployments[':idOrUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV13DeploymentsIdOrUrl<TError = unknown>(
  args: InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV13DeploymentsIdOrUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v13.deployments[':idOrUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV13DeploymentsIdKey() {
  return ['v13', '/v13/deployments/:id', 'DELETE'] as const
}

export function useDeleteV13DeploymentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v13.deployments)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v13.deployments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV13DeploymentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v13.deployments)[':id']['$delete']> },
      ) => parseResponse(client.v13.deployments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2AliasesAliasIdKey() {
  return ['v2', '/v2/aliases/:aliasId', 'DELETE'] as const
}

export function useDeleteV2AliasesAliasId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.aliases)[':aliasId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.aliases)[':aliasId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2AliasesAliasIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.aliases)[':aliasId']['$delete']> },
      ) => parseResponse(client.v2.aliases[':aliasId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DeploymentsIdOrUrlEventsKey(
  args: InferRequestType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>,
) {
  return ['v2', '/v2/deployments/:idOrUrl/events', args] as const
}

export function useGetV2DeploymentsIdOrUrlEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2DeploymentsIdOrUrlEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.deployments[':idOrUrl'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DeploymentsIdOrUrlEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2DeploymentsIdOrUrlEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.deployments[':idOrUrl'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2DeploymentsIdAliasesKey(
  args: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>,
) {
  return ['v2', '/v2/deployments/:id/aliases', args] as const
}

export function useGetV2DeploymentsIdAliases<TError = unknown>(
  args: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2DeploymentsIdAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.deployments[':id'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DeploymentsIdAliases<TError = unknown>(
  args: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2DeploymentsIdAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.deployments[':id'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DeploymentsIdAliasesKey() {
  return ['v2', '/v2/deployments/:id/aliases', 'POST'] as const
}

export function usePostV2DeploymentsIdAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DeploymentsIdAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$post']> },
      ) => parseResponse(client.v2.deployments[':id'].aliases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2DomainsDomainRecordsKey() {
  return ['v2', '/v2/domains/:domain/records', 'POST'] as const
}

export function usePostV2DomainsDomainRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domains)[':domain']['records']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.domains)[':domain']['records']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DomainsDomainRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.domains)[':domain']['records']['$post']> },
      ) => parseResponse(client.v2.domains[':domain'].records.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2DomainsDomainRecordsRecordIdKey() {
  return ['v2', '/v2/domains/:domain/records/:recordId', 'DELETE'] as const
}

export function useDeleteV2DomainsDomainRecordsRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DomainsDomainRecordsRecordIdKey()
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
            (typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.domains[':domain'].records[':recordId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FilesKey() {
  return ['v2', '/v2/files', 'POST'] as const
}

export function usePostV2Files<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.files.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.files.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.files.$post> }) =>
        parseResponse(client.v2.files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2IntegrationsLogDrainsKey(
  args: InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>,
) {
  return ['v2', '/v2/integrations/log-drains', args] as const
}

export function useGetV2IntegrationsLogDrains<TError = unknown>(
  args: InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2IntegrationsLogDrainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.integrations['log-drains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2IntegrationsLogDrains<TError = unknown>(
  args: InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2IntegrationsLogDrainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.integrations['log-drains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2IntegrationsLogDrainsKey() {
  return ['v2', '/v2/integrations/log-drains', 'POST'] as const
}

export function usePostV2IntegrationsLogDrains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.integrations)['log-drains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2IntegrationsLogDrainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.integrations)['log-drains']['$post']> },
      ) => parseResponse(client.v2.integrations['log-drains'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2SecretsIdOrNameKey() {
  return ['v2', '/v2/secrets/:idOrName', 'DELETE'] as const
}

export function useDeleteV2SecretsIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.secrets)[':idOrName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.secrets)[':idOrName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SecretsIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.secrets)[':idOrName']['$delete']> },
      ) => parseResponse(client.v2.secrets[':idOrName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SecretsNameKey() {
  return ['v2', '/v2/secrets/:name', 'POST'] as const
}

export function usePostV2SecretsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.secrets)[':name']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.secrets)[':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SecretsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.secrets)[':name']['$post']> },
      ) => parseResponse(client.v2.secrets[':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SecretsNameKey() {
  return ['v2', '/v2/secrets/:name', 'PATCH'] as const
}

export function usePatchV2SecretsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.secrets)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.secrets)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2SecretsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.secrets)[':name']['$patch']> },
      ) => parseResponse(client.v2.secrets[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TeamsKey(args: InferRequestType<typeof client.v2.teams.$get>) {
  return ['v2', '/v2/teams', args] as const
}

export function useGetV2Teams<TError = unknown>(
  args: InferRequestType<typeof client.v2.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Teams<TError = unknown>(
  args: InferRequestType<typeof client.v2.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV2TeamsTeamIdKey(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>,
) {
  return ['v2', '/v2/teams/:teamId', args] as const
}

export function useGetV2TeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.teams[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.teams[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV2TeamsTeamIdKey() {
  return ['v2', '/v2/teams/:teamId', 'PATCH'] as const
}

export function usePatchV2TeamsTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.teams)[':teamId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2TeamsTeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.teams)[':teamId']['$patch']> },
      ) => parseResponse(client.v2.teams[':teamId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TeamsTeamIdMembersKey(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$get']>,
) {
  return ['v2', '/v2/teams/:teamId/members', args] as const
}

export function useGetV2TeamsTeamIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TeamsTeamIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.teams[':teamId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TeamsTeamIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TeamsTeamIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.teams[':teamId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UserKey() {
  return ['v2', '/v2/user'] as const
}

export function useGetV2User<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2User<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3EventsKey(args: InferRequestType<typeof client.v3.events.$get>) {
  return ['v3', '/v3/events', args] as const
}

export function useGetV3Events<TError = unknown>(
  args: InferRequestType<typeof client.v3.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Events<TError = unknown>(
  args: InferRequestType<typeof client.v3.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SecretsKey(args: InferRequestType<typeof client.v3.secrets.$get>) {
  return ['v3', '/v3/secrets', args] as const
}

export function useGetV3Secrets<TError = unknown>(
  args: InferRequestType<typeof client.v3.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Secrets<TError = unknown>(
  args: InferRequestType<typeof client.v3.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3SecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SecretsIdOrNameKey(
  args: InferRequestType<(typeof client.v3.secrets)[':idOrName']['$get']>,
) {
  return ['v3', '/v3/secrets/:idOrName', args] as const
}

export function useGetV3SecretsIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.v3.secrets)[':idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.secrets)[':idOrName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SecretsIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.secrets)[':idOrName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.secrets[':idOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SecretsIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.v3.secrets)[':idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.secrets)[':idOrName']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SecretsIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.secrets)[':idOrName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.secrets[':idOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3UserTokensKey() {
  return ['v3', '/v3/user/tokens', 'POST'] as const
}

export function usePostV3UserTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.user.tokens.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v3.user.tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3UserTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.user.tokens.$post> }) =>
        parseResponse(client.v3.user.tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3UserTokensTokenIdKey() {
  return ['v3', '/v3/user/tokens/:tokenId', 'DELETE'] as const
}

export function useDeleteV3UserTokensTokenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.user.tokens)[':tokenId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.user.tokens)[':tokenId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3UserTokensTokenIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.user.tokens)[':tokenId']['$delete']> },
      ) => parseResponse(client.v3.user.tokens[':tokenId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4AliasesKey(args: InferRequestType<typeof client.v4.aliases.$get>) {
  return ['v4', '/v4/aliases', args] as const
}

export function useGetV4Aliases<TError = unknown>(
  args: InferRequestType<typeof client.v4.aliases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4AliasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4Aliases<TError = unknown>(
  args: InferRequestType<typeof client.v4.aliases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4AliasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4AliasesIdOrAliasKey(
  args: InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>,
) {
  return ['v4', '/v4/aliases/:idOrAlias', args] as const
}

export function useGetV4AliasesIdOrAlias<TError = unknown>(
  args: InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV4AliasesIdOrAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.aliases[':idOrAlias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4AliasesIdOrAlias<TError = unknown>(
  args: InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV4AliasesIdOrAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.aliases[':idOrAlias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4DomainsKey() {
  return ['v4', '/v4/domains', 'POST'] as const
}

export function usePostV4Domains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v4.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4DomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.domains.$post> }) =>
        parseResponse(client.v4.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4DomainsBuyKey() {
  return ['v4', '/v4/domains/buy', 'POST'] as const
}

export function usePostV4DomainsBuy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.buy.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.domains.buy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4DomainsBuyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.domains.buy.$post> }) =>
        parseResponse(client.v4.domains.buy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4DomainsPriceKey(
  args: InferRequestType<typeof client.v4.domains.price.$get>,
) {
  return ['v4', '/v4/domains/price', args] as const
}

export function useGetV4DomainsPrice<TError = unknown>(
  args: InferRequestType<typeof client.v4.domains.price.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4DomainsPriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.domains.price.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4DomainsPrice<TError = unknown>(
  args: InferRequestType<typeof client.v4.domains.price.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4DomainsPriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.domains.price.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4DomainsStatusKey(
  args: InferRequestType<typeof client.v4.domains.status.$get>,
) {
  return ['v4', '/v4/domains/status', args] as const
}

export function useGetV4DomainsStatus<TError = unknown>(
  args: InferRequestType<typeof client.v4.domains.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV4DomainsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.domains.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4DomainsStatus<TError = unknown>(
  args: InferRequestType<typeof client.v4.domains.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV4DomainsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.domains.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4DomainsDomainRecordsKey(
  args: InferRequestType<(typeof client.v4.domains)[':domain']['records']['$get']>,
) {
  return ['v4', '/v4/domains/:domain/records', args] as const
}

export function useGetV4DomainsDomainRecords<TError = unknown>(
  args: InferRequestType<(typeof client.v4.domains)[':domain']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.domains)[':domain']['records']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV4DomainsDomainRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.domains)[':domain']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.domains[':domain'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4DomainsDomainRecords<TError = unknown>(
  args: InferRequestType<(typeof client.v4.domains)[':domain']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.domains)[':domain']['records']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV4DomainsDomainRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.domains)[':domain']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.domains[':domain'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV5DomainsKey(args: InferRequestType<typeof client.v5.domains.$get>) {
  return ['v5', '/v5/domains', args] as const
}

export function useGetV5Domains<TError = unknown>(
  args: InferRequestType<typeof client.v5.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV5DomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV5Domains<TError = unknown>(
  args: InferRequestType<typeof client.v5.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV5DomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV5DomainsDomainKey(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['$get']>,
) {
  return ['v5', '/v5/domains/:domain', args] as const
}

export function useGetV5DomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV5DomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV5DomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV5DomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV5UserTokensKey() {
  return ['v5', '/v5/user/tokens'] as const
}

export function useGetV5UserTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV5UserTokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.user.tokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV5UserTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV5UserTokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.user.tokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV5UserTokensTokenIdKey(
  args: InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>,
) {
  return ['v5', '/v5/user/tokens/:tokenId', args] as const
}

export function useGetV5UserTokensTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV5UserTokensTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.user.tokens[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV5UserTokensTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV5UserTokensTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.user.tokens[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV6DeploymentsKey(args: InferRequestType<typeof client.v6.deployments.$get>) {
  return ['v6', '/v6/deployments', args] as const
}

export function useGetV6Deployments<TError = unknown>(
  args: InferRequestType<typeof client.v6.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV6DeploymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v6.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV6Deployments<TError = unknown>(
  args: InferRequestType<typeof client.v6.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV6DeploymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v6.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV6DeploymentsIdFilesKey(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>,
) {
  return ['v6', '/v6/deployments/:id/files', args] as const
}

export function useGetV6DeploymentsIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV6DeploymentsIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v6.deployments[':id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV6DeploymentsIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV6DeploymentsIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v6.deployments[':id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV6DeploymentsIdFilesFileIdKey(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>,
) {
  return ['v6', '/v6/deployments/:id/files/:fileId', args] as const
}

export function useGetV6DeploymentsIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV6DeploymentsIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v6.deployments[':id'].files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV6DeploymentsIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV6DeploymentsIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v6.deployments[':id'].files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV6DomainsDomainKey() {
  return ['v6', '/v6/domains/:domain', 'DELETE'] as const
}

export function useDeleteV6DomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v6.domains)[':domain']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v6.domains)[':domain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV6DomainsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v6.domains)[':domain']['$delete']> },
      ) => parseResponse(client.v6.domains[':domain'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV6DomainsDomainConfigKey(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>,
) {
  return ['v6', '/v6/domains/:domain/config', args] as const
}

export function useGetV6DomainsDomainConfig<TError = unknown>(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV6DomainsDomainConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v6.domains[':domain'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV6DomainsDomainConfig<TError = unknown>(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV6DomainsDomainConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v6.domains[':domain'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV7CertsKey() {
  return ['v7', '/v7/certs', 'PUT'] as const
}

export function usePutV7Certs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v7.certs.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v7.certs.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV7CertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v7.certs.$put> }) =>
        parseResponse(client.v7.certs.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV7CertsKey() {
  return ['v7', '/v7/certs', 'POST'] as const
}

export function usePostV7Certs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v7.certs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v7.certs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV7CertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v7.certs.$post> }) =>
        parseResponse(client.v7.certs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV7CertsIdKey(
  args: InferRequestType<(typeof client.v7.certs)[':id']['$get']>,
) {
  return ['v7', '/v7/certs/:id', args] as const
}

export function useGetV7CertsId<TError = unknown>(
  args: InferRequestType<(typeof client.v7.certs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV7CertsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v7.certs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV7CertsId<TError = unknown>(
  args: InferRequestType<(typeof client.v7.certs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV7CertsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v7.certs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV7CertsIdKey() {
  return ['v7', '/v7/certs/:id', 'DELETE'] as const
}

export function useDeleteV7CertsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v7.certs)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV7CertsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v7.certs)[':id']['$delete']> },
      ) => parseResponse(client.v7.certs[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV8ArtifactsKey() {
  return ['v8', '/v8/artifacts', 'POST'] as const
}

export function usePostV8Artifacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v8.artifacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV8ArtifactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v8.artifacts.$post> }) =>
        parseResponse(client.v8.artifacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV8ArtifactsEventsKey() {
  return ['v8', '/v8/artifacts/events', 'POST'] as const
}

export function usePostV8ArtifactsEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.events.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v8.artifacts.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV8ArtifactsEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v8.artifacts.events.$post> }) =>
        parseResponse(client.v8.artifacts.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV8ArtifactsStatusKey(
  args: InferRequestType<typeof client.v8.artifacts.status.$get>,
) {
  return ['v8', '/v8/artifacts/status', args] as const
}

export function useGetV8ArtifactsStatus<TError = unknown>(
  args: InferRequestType<typeof client.v8.artifacts.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV8ArtifactsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v8.artifacts.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV8ArtifactsStatus<TError = unknown>(
  args: InferRequestType<typeof client.v8.artifacts.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV8ArtifactsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v8.artifacts.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV8ArtifactsHashKey(
  args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v8', '/v8/artifacts/:hash', keyArgs] as const
}

export function useGetV8ArtifactsHash<TError = unknown>(
  args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV8ArtifactsHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v8.artifacts[':hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV8ArtifactsHash<TError = unknown>(
  args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV8ArtifactsHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v8.artifacts[':hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV8ArtifactsHashKey() {
  return ['v8', '/v8/artifacts/:hash', 'PUT'] as const
}

export function usePutV8ArtifactsHash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v8.artifacts)[':hash']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV8ArtifactsHashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v8.artifacts)[':hash']['$put']> },
      ) => parseResponse(client.v8.artifacts[':hash'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadV8ArtifactsHashKey() {
  return ['v8', '/v8/artifacts/:hash', 'HEAD'] as const
}

export function useHeadV8ArtifactsHash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$head']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v8.artifacts)[':hash']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadV8ArtifactsHashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v8.artifacts)[':hash']['$head']> },
      ) => parseResponse(client.v8.artifacts[':hash'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV9ProjectsKey(args: InferRequestType<typeof client.v9.projects.$get>) {
  return ['v9', '/v9/projects', args] as const
}

export function useGetV9Projects<TError = unknown>(
  args: InferRequestType<typeof client.v9.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV9ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v9.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV9Projects<TError = unknown>(
  args: InferRequestType<typeof client.v9.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV9ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v9.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV9ProjectsKey() {
  return ['v9', '/v9/projects', 'POST'] as const
}

export function usePostV9Projects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v9.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV9ProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v9.projects.$post> }) =>
        parseResponse(client.v9.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV9ProjectsIdOrNameKey(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>,
) {
  return ['v9', '/v9/projects/:idOrName', args] as const
}

export function useGetV9ProjectsIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV9ProjectsIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v9.projects[':idOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV9ProjectsIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV9ProjectsIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v9.projects[':idOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV9ProjectsIdOrNameKey() {
  return ['v9', '/v9/projects/:idOrName', 'DELETE'] as const
}

export function useDeleteV9ProjectsIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV9ProjectsIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v9.projects)[':idOrName']['$delete']> },
      ) => parseResponse(client.v9.projects[':idOrName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV9ProjectsIdOrNameKey() {
  return ['v9', '/v9/projects/:idOrName', 'PATCH'] as const
}

export function usePatchV9ProjectsIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV9ProjectsIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v9.projects)[':idOrName']['$patch']> },
      ) => parseResponse(client.v9.projects[':idOrName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV9ProjectsIdOrNameDomainsKey(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>,
) {
  return ['v9', '/v9/projects/:idOrName/domains', args] as const
}

export function useGetV9ProjectsIdOrNameDomains<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV9ProjectsIdOrNameDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v9.projects[':idOrName'].domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV9ProjectsIdOrNameDomains<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV9ProjectsIdOrNameDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v9.projects[':idOrName'].domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV9ProjectsIdOrNameDomainsKey() {
  return ['v9', '/v9/projects/:idOrName/domains', 'POST'] as const
}

export function usePostV9ProjectsIdOrNameDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV9ProjectsIdOrNameDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$post']> },
      ) => parseResponse(client.v9.projects[':idOrName'].domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV9ProjectsIdOrNameDomainsDomainKey(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>,
) {
  return ['v9', '/v9/projects/:idOrName/domains/:domain', args] as const
}

export function useGetV9ProjectsIdOrNameDomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
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
        ? getGetV9ProjectsIdOrNameDomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v9.projects[':idOrName'].domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV9ProjectsIdOrNameDomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
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
        ? getGetV9ProjectsIdOrNameDomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v9.projects[':idOrName'].domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV9ProjectsIdOrNameDomainsDomainKey() {
  return ['v9', '/v9/projects/:idOrName/domains/:domain', 'DELETE'] as const
}

export function useDeleteV9ProjectsIdOrNameDomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV9ProjectsIdOrNameDomainsDomainKey()
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
            (typeof client.v9.projects)[':idOrName']['domains'][':domain']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v9.projects[':idOrName'].domains[':domain'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV9ProjectsIdOrNameDomainsDomainKey() {
  return ['v9', '/v9/projects/:idOrName/domains/:domain', 'PATCH'] as const
}

export function usePatchV9ProjectsIdOrNameDomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV9ProjectsIdOrNameDomainsDomainKey()
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
            (typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v9.projects[':idOrName'].domains[':domain'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV9ProjectsIdOrNameDomainsDomainVerifyKey() {
  return ['v9', '/v9/projects/:idOrName/domains/:domain/verify', 'POST'] as const
}

export function usePostV9ProjectsIdOrNameDomainsDomainVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v9.projects)[':idOrName']['domains'][':domain']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v9.projects)[':idOrName']['domains'][':domain']['verify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV9ProjectsIdOrNameDomainsDomainVerifyKey()
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
            (typeof client.v9.projects)[':idOrName']['domains'][':domain']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v9.projects[':idOrName'].domains[':domain'].verify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV9ProjectsIdOrNameEnvKey(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['env']['$get']>,
) {
  return ['v9', '/v9/projects/:idOrName/env', args] as const
}

export function useGetV9ProjectsIdOrNameEnv<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV9ProjectsIdOrNameEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v9.projects[':idOrName'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV9ProjectsIdOrNameEnv<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV9ProjectsIdOrNameEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v9.projects[':idOrName'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV9ProjectsIdOrNameEnvIdKey() {
  return ['v9', '/v9/projects/:idOrName/env/:id', 'DELETE'] as const
}

export function useDeleteV9ProjectsIdOrNameEnvId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV9ProjectsIdOrNameEnvIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>
        },
      ) => parseResponse(client.v9.projects[':idOrName'].env[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV9ProjectsIdOrNameEnvIdKey() {
  return ['v9', '/v9/projects/:idOrName/env/:id', 'PATCH'] as const
}

export function usePatchV9ProjectsIdOrNameEnvId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV9ProjectsIdOrNameEnvIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>
        },
      ) => parseResponse(client.v9.projects[':idOrName'].env[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
