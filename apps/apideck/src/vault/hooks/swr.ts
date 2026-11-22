import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVaultKey() {
  return ['vault'] as const
}

export function getGetVaultAuthorizeServiceIdApplicationIdKey(
  args: InferRequestType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>,
) {
  return ['vault', '/vault/authorize/:service_id/:application_id', args] as const
}

export function useGetVaultAuthorizeServiceIdApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>
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
        ? getGetVaultAuthorizeServiceIdApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.vault.authorize[':service_id'][':application_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultAuthorizeServiceIdApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>
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
        ? getGetVaultAuthorizeServiceIdApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vault.authorize)[':service_id'][':application_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.vault.authorize[':service_id'][':application_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVaultCallbackKey(args: InferRequestType<typeof client.vault.callback.$get>) {
  return ['vault', '/vault/callback', args] as const
}

export function useGetVaultCallback<TError = unknown>(
  args: InferRequestType<typeof client.vault.callback.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.callback.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultCallbackKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.callback.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.callback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultCallback<TError = unknown>(
  args: InferRequestType<typeof client.vault.callback.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.callback.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultCallbackKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.callback.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.callback.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVaultConnectionsKey(
  args: InferRequestType<typeof client.vault.connections.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/connections', keyArgs] as const
}

export function useGetVaultConnections<TError = unknown>(
  args: InferRequestType<typeof client.vault.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultConnections<TError = unknown>(
  args: InferRequestType<typeof client.vault.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVaultConnectionsUnifiedApiServiceIdKey(
  args: InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/connections/:unified_api/:service_id', keyArgs] as const
}

export function useGetVaultConnectionsUnifiedApiServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>
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
        ? getGetVaultConnectionsUnifiedApiServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.vault.connections[':unified_api'][':service_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultConnectionsUnifiedApiServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>
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
        ? getGetVaultConnectionsUnifiedApiServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vault.connections)[':unified_api'][':service_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.vault.connections[':unified_api'][':service_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVaultConnectionsUnifiedApiServiceIdKey() {
  return ['vault', '/vault/connections/:unified_api/:service_id', 'POST'] as const
}

export function usePostVaultConnectionsUnifiedApiServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.vault.connections)[':unified_api'][':service_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultConnectionsUnifiedApiServiceIdKey()
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
            (typeof client.vault.connections)[':unified_api'][':service_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.vault.connections[':unified_api'][':service_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteVaultConnectionsUnifiedApiServiceIdKey() {
  return ['vault', '/vault/connections/:unified_api/:service_id', 'DELETE'] as const
}

export function useDeleteVaultConnectionsUnifiedApiServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vault.connections)[':unified_api'][':service_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVaultConnectionsUnifiedApiServiceIdKey()
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
            (typeof client.vault.connections)[':unified_api'][':service_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.vault.connections[':unified_api'][':service_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchVaultConnectionsUnifiedApiServiceIdKey() {
  return ['vault', '/vault/connections/:unified_api/:service_id', 'PATCH'] as const
}

export function usePatchVaultConnectionsUnifiedApiServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.vault.connections)[':unified_api'][':service_id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vault.connections)[':unified_api'][':service_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVaultConnectionsUnifiedApiServiceIdKey()
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
            (typeof client.vault.connections)[':unified_api'][':service_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.vault.connections[':unified_api'][':service_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVaultConnectionsUnifiedApiServiceIdImportKey() {
  return ['vault', '/vault/connections/:unified_api/:service_id/import', 'POST'] as const
}

export function usePostVaultConnectionsUnifiedApiServiceIdImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vault.connections)[':unified_api'][':service_id']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.vault.connections)[':unified_api'][':service_id']['import']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultConnectionsUnifiedApiServiceIdImportKey()
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
            (typeof client.vault.connections)[':unified_api'][':service_id']['import']['$post']
          >
        },
      ) =>
        parseResponse(
          client.vault.connections[':unified_api'][':service_id'].import.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVaultConnectionsUnifiedApiServiceIdTokenKey() {
  return ['vault', '/vault/connections/:unified_api/:service_id/token', 'POST'] as const
}

export function usePostVaultConnectionsUnifiedApiServiceIdToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vault.connections)[':unified_api'][':service_id']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.vault.connections)[':unified_api'][':service_id']['token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultConnectionsUnifiedApiServiceIdTokenKey()
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
            (typeof client.vault.connections)[':unified_api'][':service_id']['token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.vault.connections[':unified_api'][':service_id'].token.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVaultConnectionsUnifiedApiServiceIdResourceConfigKey(
  args: InferRequestType<
    (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/connections/:unified_api/:service_id/:resource/config', keyArgs] as const
}

export function useGetVaultConnectionsUnifiedApiServiceIdResourceConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
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
        ? getGetVaultConnectionsUnifiedApiServiceIdResourceConfigKey(args)
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
                (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
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
          client.vault.connections[':unified_api'][':service_id'][':resource'].config.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultConnectionsUnifiedApiServiceIdResourceConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
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
        ? getGetVaultConnectionsUnifiedApiServiceIdResourceConfigKey(args)
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
                (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$get']
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
          client.vault.connections[':unified_api'][':service_id'][':resource'].config.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchVaultConnectionsUnifiedApiServiceIdResourceConfigKey() {
  return ['vault', '/vault/connections/:unified_api/:service_id/:resource/config', 'PATCH'] as const
}

export function usePatchVaultConnectionsUnifiedApiServiceIdResourceConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVaultConnectionsUnifiedApiServiceIdResourceConfigKey()
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
            (typeof client.vault.connections)[':unified_api'][':service_id'][':resource']['config']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.vault.connections[':unified_api'][':service_id'][':resource'].config.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVaultConsumersKey(
  args: InferRequestType<typeof client.vault.consumers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/consumers', keyArgs] as const
}

export function useGetVaultConsumers<TError = unknown>(
  args: InferRequestType<typeof client.vault.consumers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultConsumersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.consumers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultConsumers<TError = unknown>(
  args: InferRequestType<typeof client.vault.consumers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultConsumersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.consumers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVaultConsumersKey() {
  return ['vault', '/vault/consumers', 'POST'] as const
}

export function usePostVaultConsumers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.consumers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.vault.consumers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultConsumersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vault.consumers.$post> }) =>
        parseResponse(client.vault.consumers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVaultConsumersConsumerIdKey(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/consumers/:consumer_id', keyArgs] as const
}

export function useGetVaultConsumersConsumerId<TError = unknown>(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultConsumersConsumerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.consumers[':consumer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultConsumersConsumerId<TError = unknown>(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultConsumersConsumerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.consumers[':consumer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVaultConsumersConsumerIdKey() {
  return ['vault', '/vault/consumers/:consumer_id', 'DELETE'] as const
}

export function useDeleteVaultConsumersConsumerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVaultConsumersConsumerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$delete']> },
      ) => parseResponse(client.vault.consumers[':consumer_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchVaultConsumersConsumerIdKey() {
  return ['vault', '/vault/consumers/:consumer_id', 'PATCH'] as const
}

export function usePatchVaultConsumersConsumerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchVaultConsumersConsumerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['$patch']> },
      ) => parseResponse(client.vault.consumers[':consumer_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVaultConsumersConsumerIdStatsKey(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/consumers/:consumer_id/stats', keyArgs] as const
}

export function useGetVaultConsumersConsumerIdStats<TError = unknown>(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultConsumersConsumerIdStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vault.consumers[':consumer_id'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultConsumersConsumerIdStats<TError = unknown>(
  args: InferRequestType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVaultConsumersConsumerIdStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vault.consumers)[':consumer_id']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vault.consumers[':consumer_id'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVaultLogsKey(args: InferRequestType<typeof client.vault.logs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['vault', '/vault/logs', keyArgs] as const
}

export function useGetVaultLogs<TError = unknown>(
  args: InferRequestType<typeof client.vault.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.logs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.logs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultLogs<TError = unknown>(
  args: InferRequestType<typeof client.vault.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.logs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVaultLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.logs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vault.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVaultRevokeServiceIdApplicationIdKey(
  args: InferRequestType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>,
) {
  return ['vault', '/vault/revoke/:service_id/:application_id', args] as const
}

export function useGetVaultRevokeServiceIdApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>
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
        ? getGetVaultRevokeServiceIdApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.vault.revoke[':service_id'][':application_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVaultRevokeServiceIdApplicationId<TError = unknown>(
  args: InferRequestType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>
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
        ? getGetVaultRevokeServiceIdApplicationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vault.revoke)[':service_id'][':application_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.vault.revoke[':service_id'][':application_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVaultSessionsKey() {
  return ['vault', '/vault/sessions', 'POST'] as const
}

export function usePostVaultSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vault.sessions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.vault.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVaultSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vault.sessions.$post> }) =>
        parseResponse(client.vault.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
